interface IA {
	a: string
	b: number
}

type TB = {
	b: number
	c: number[]
}

type TC = IA | TB;    // TC类型的变量的键只需包含ab或bc即可，当然也可以abc都有  联合
type TD = IA & TB;    // TD类型的变量的键必需包含abc  交叉（多个聚合成一个类型


type one = "a"|'123'| '234' | '345'
type two = '123' & '234'

interface X {
	aa:string
  }
  interface Y {
	bb?:string
  }
  type x = Y & X
  let a1:x = {aa:'12'}

