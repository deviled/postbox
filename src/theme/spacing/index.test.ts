import { values, spacing } from '.';

describe('spacing', () => {
  it('should match snapshot', () => {
    expect(values).toMatchSnapshot();
  });

  it('should return correct spacing', () => {
    expect(spacing(12)).toBe('12px');
  });

  it('should return correct py and px spacing', () => {
    expect(spacing(12, 24)).toBe('12px 24px');
  });

  it('should return correct pt, px and pb spacing', () => {
    expect(spacing(12, 16, 24)).toBe('12px 16px 24px');
  });

  it('should return correct pt, pr, pb, pl spacing', () => {
    expect(spacing(12, 16, 20, 24)).toBe('12px 16px 20px 24px');
  });

  it('should throw error if more than 4 arguments provided', () => {
    const throwable = () => spacing(12, 16, 20, 24, 32);

    expect(throwable).toThrow(Error);
    expect(throwable).toThrow('Max 4 arguments theme.spacing(12, 16, 20, 24, 32)');
  });
});
