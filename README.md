# casper: the friendly programming language

![Casper Logo](/images/casper01.png)

## introduction

Casper is a friendly scripting language designed to make high level programming a light and comfortable experience!

## features

- scripting language
- statically typed
- partial type inference
- optional parameters

## type

### primitive types

- string
- boolean/boo
- num
- list
- tuple

### variable Declaration

`num x is 5`

`string y is "ianlizards@icould.com"`

`boo z is true`

`list a is [3, "donovan", false]`

### function Declaration

```casper
fn foobar() =>
	write("hello world!")

fn barfoo(#x) =>
	from 0 to x:
		write("help")
```

## operators

- add `+`
- subtract `-`
- multiply `*`
- divide `/`
- integer division `//`
- modulus `%`
- equal `=`
- not equal `!=`
- less than `<`
- greater than `>`
- less than or equal `<=`
- greater than or equal `>=`
- logical AND `and`
- logical OR `or`
- logical NOT `!`
- logical XOR? `xor`

## declaration and assignment

already done?

## function declaration

already done?

## ternary

`do a if b else c`

## conditional

```casper
if (big = true):
    write("big if true")
else if (big = false):
    write("bigly")
else:
    write("covfefe")
```

## loop

```casper
from 0 to x:
	write(x)
```

```casper
while (true):
    write("big chungus")
```

## comments

```casper
~ this is a comment!

~~ this is a
multiline comment ~~
```

## examples

### fibonacci program

```casper
fn fibonacci(num x) =>
	if (x <= 1):
		return 1
	return fibonacci(x - 1) + fibonacci(x - 2)
```

### greatest common divisor

```casper
fn computeGCD(num x, num y):
   while(y):
       x = y
       y = x % y
   return x
```
