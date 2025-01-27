const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
  expect(winner).toBe('Kent C. Dodds');
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds','Ken Wheeler');

  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])


  // cleanup
  utils.getWinner = originalGetWinner
})
