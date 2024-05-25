import { NameJoinLastNamePipe } from './name-join-last-name.pipe';

describe('NameJoinLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NameJoinLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
