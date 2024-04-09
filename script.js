function fibonacci(num) {
// your code here
	if(num==1){
		return 0;
	}
	if(num==2){
return 1;
	}
	let prev = 0;
	let curr = 1;
	let next;
	for(let i = 3; i<=num; i++){
next = prev+curr;
		prev = curr;
		curr = next;
	}
	return next;
}

module.exports = fibonacci;
