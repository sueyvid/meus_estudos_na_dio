programa
{
	
	funcao inicio()
	{
		inteiro jan,fev,mar,abr,total
		real media

		escreva("Digite a quantidade de vendas em Janeiro: ")
		leia(jan)
		escreva("Digite a quantidade de vendas em Fevereiro: ")
		leia(fev)
		escreva("Digite a quantidade de vendas em Março: ")
		leia(mar)
		escreva("Digite a quantidade de vendas em Abril: ")
		leia(abr)

		total = jan+fev+mar+abr
		media = total/4.0
		escreva("O total de vendas foi: " + total + " e a media de vendas foi: " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 380; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */