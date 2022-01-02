programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,numero
		
		contador = 0

		escreva("Digite o numero que você deseja saber a tabuada: ")
		leia(numero)

		escreva("Digite o tamanho da tabuada (multiplicar até qual número?): ")
		leia(limite)

		faca{
			resultado = numero*contador
			escreva(numero + " x " + contador + " = " + resultado + "\n")
			contador++
		}enquanto(contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */