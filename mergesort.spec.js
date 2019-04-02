describe('Split Array function', function() {
    it('is able to split an even array into two halves', function() {
        expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]])
    });
    it('is able to split an odd array into two halves', function() {
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]])
    })
  });

  describe('Merge Function', function() {
      it('is able to merge two arrays of even length', function() {
          expect(merge([1, 3, 6], [2, 5, 7])).toEqual([1, 2, 3, 5, 6, 7])
      });
      it('is able to merge two arrays of uneven lengths', function() {
          expect(merge([1, 3, 6, 7], [2, 4, 8])).toEqual([1, 2, 3, 4, 6, 7, 8])
      })
  })