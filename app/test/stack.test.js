class Stack {
   constructor() {
      this.top = -1;
      this.items = {};
   }
}

describe('my stack', () => {
   it('is created empty', () => {
      const stack = new Stack();

      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
   });
   it.todo('can push to top');
   it.todo('can pop off');
})