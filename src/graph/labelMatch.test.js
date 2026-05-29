import { describe, expect, it } from 'vitest';
import { tokenizeLabel, suggestLabel, autoResolveLabel } from './labelMatch';

// A slice of the real AE catalog around the labels that tripped up Gemini.
const LABELS = [
  'AVLayer Get numProperties',
  'CameraLayer Get numProperties',
  'Layer Get numProperties',
  'MaskPropertyGroup Get numProperties',
  'PropertyGroup Get numProperties',
  'ShapeLayer Get numProperties',
  'PropertyGroup Get matchName',
  'PropertyBase Get matchName',
  'Get Project Items',
];

describe('tokenizeLabel', () => {
  it('splits camelCase / Pascal so class stems are shared tokens', () => {
    expect(tokenizeLabel('PropertyBase Get numProperties'))
      .toEqual(['property', 'base', 'get', 'num', 'properties']);
    expect(tokenizeLabel('PropertyGroup')).toEqual(['property', 'group']);
  });
});

describe('autoResolveLabel', () => {
  it('corrects the wrong class to PropertyGroup (the real numProperties owner)', () => {
    // The old tokenizer tied PropertyGroup with AVLayer and picked AVLayer.
    expect(autoResolveLabel('PropertyBase Get numProperties', LABELS))
      .toBe('PropertyGroup Get numProperties');
  });

  it('returns null when the winner is not unique (ambiguous)', () => {
    // "Get numProperties" alone shares {get, num, properties} with several
    // classes equally — no confident single answer.
    expect(autoResolveLabel('Foo Get numProperties', LABELS)).toBeNull();
  });

  it('returns null when nothing meaningfully overlaps', () => {
    expect(autoResolveLabel('Completely Unrelated Thing', LABELS)).toBeNull();
  });
});

describe('suggestLabel', () => {
  it('still offers a best-effort suggestion for the report', () => {
    expect(suggestLabel('PropertyBase Get numProperties', LABELS))
      .toBe('PropertyGroup Get numProperties');
  });
  it('returns null when there is no shared token', () => {
    expect(suggestLabel('zzz qqq', LABELS)).toBeNull();
  });
});
