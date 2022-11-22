import { CarsPipe } from './cars.pipe';

describe('CarsPipe', () => {
  it('create an instance', () => {
    const pipe = new CarsPipe();
    expect(pipe).toBeTruthy();
  });
});
