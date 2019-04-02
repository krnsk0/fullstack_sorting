describe('Bubble Sort', function() {

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts two elements requires exactly one swap', function() {
    console.log(swap)

    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([2,1])).toEqual([1,2])
    expect(swap.calls.count()).toEqual(1);
  });

  it('sorts ten elements with 23 swaps', function() {
    spyOn(window, 'swap').and.callThrough();

    expect(bubbleSort([2, 1, 9, 7, 5, 4, 3, 6, 8, 0])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
    expect(swap.calls.count()).toEqual(23)
  });
});
