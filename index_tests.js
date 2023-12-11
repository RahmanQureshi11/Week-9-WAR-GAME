   var expect = chai.expect;
describe('Deck', function() {
  describe('createDeck()', function() {
    it('should create a deck with 52 cards', function() {
      const testDeck = new Deck();
      testDeck.createDeck();
      expect.equal(testDeck.cards.length, 52);
    });

    it('should contain instances of Card class', function() {
      const testDeck = new Deck();
      testDeck.createDeck();
      expect.instanceOf(testDeck.cards[0], Card);
    });
  });
});