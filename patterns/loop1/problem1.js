/*

1. Print 5 Stars in a Line  

***** 

*/

let stars = '';
for (let i = 1; i <= 5; i++) {
    stars += '*';
}
console.log(stars);




/*

Step-by-Step Execution (with Explanation):
🟩 Step 1: Initialization
javascript
Copy
Edit
let stars = '';
A variable stars is declared and initialized with an empty string.

Purpose: We'll add (+=) a * in every loop cycle to this string.

🟦 Step 2: Start the Loop
javascript
Copy
Edit
for (let i = 1; i <= 5; i++) {
This is a for loop that runs 5 times.

It starts with i = 1, and continues while i <= 5.

After each cycle, it increases i by 1 (i++).

🔁 Step 3: Loop Iterations
➤ 1st Iteration (i = 1):
stars = ''

stars += '*' → becomes ' * '

➤ 2nd Iteration (i = 2):
stars = '*'

stars += '*' → becomes '**'

➤ 3rd Iteration (i = 3):
stars = '**'

stars += '*' → becomes '***'

➤ 4th Iteration (i = 4):
stars = '***'

stars += '*' → becomes '****'

➤ 5th Iteration (i = 5):
stars = '****'

stars += '*' → becomes '*****'

🟥 Step 4: After the Loop
javascript
Copy
Edit
console.log(stars);
Now the loop has ended.

stars contains '*****'

console.log(stars) prints:

markdown
Copy
Edit
*****
🧠 Summary of Execution Flow:
Step	i	stars value
Init	-	''
1	1	'*'
2	2	'**'
3	3	'***'
4	4	'****'
5	5	'*****'
End	-   Printed to console


*/

