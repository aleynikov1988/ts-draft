import { avg } from './avg';

describe('Test avg', () => {
    it('shoult calc avg', () => {
        expect(avg(3, 3, 3)).toEqual('Avg is 3');
    })
});
