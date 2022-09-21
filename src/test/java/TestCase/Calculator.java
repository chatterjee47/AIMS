package TestCase;

import org.junit.Test;

public class Calculator {
	
	public static int add(int num1, int num2) {
		return num1+num2;	
	}
	
	public static int sub(int num1, int num2) {
		return num1-num2;	
	}
	
	public static int mul(int num1, int num2) {
		return num1*num2;	
	}
	
	public static int div(int num1, int num2) {
		return num1/num2;	
	}

	@Test
	public void TestOne() {
	System.out.println(	Calculator.add(2, 2));
	System.out.println(	Calculator.sub(4, 2));
	System.out.println(	Calculator.mul(3, 3));
	System.out.println(	Calculator.div(10, 2));
	}
}
