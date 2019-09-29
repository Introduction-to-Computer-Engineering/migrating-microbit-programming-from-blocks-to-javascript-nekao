let list = [5, 2, 1, 3, 4]

input.onButtonPressed(Button.A, () => {
   for (let value of list) {
       value += 1
   }
})