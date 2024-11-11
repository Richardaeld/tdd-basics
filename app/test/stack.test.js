class Stack {
   constructor() {
      this.top = -1;
      this.items = {};
   }
   get peek() {
      return this.items[this.top];
   }
   push(value) {
      this.top++;
      this.items[this.top] = value;
   }
   pop() {
      if (this.items.length === 0) throw new Error ('Stack is empty');
      this.items[this.top] = undefined;
      this.top--;
   }
}

describe('my stack', () => {
   let stack;

   beforeEach(() => {
      stack = new Stack();
   });

   it('is created empty', () => {
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
   });

   it('can push to top', () => {
      stack.push('abc');
      expect(stack.top).toBe(0);
      expect(stack.peek).toBe('abc')
   });

   it('can pop off', () => {
      stack.push('abc');
      stack.pop();
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
   });
})