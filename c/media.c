#include <stdio.h>

int main() {
  float n1, n2, n3, n4, med;
  printf("Digite a nota do 1º Bimestre:");
    scanf("%f", &n1);
  printf("Digite a nota do 2º Bimestre:");
    scanf("%f", &n2);
  printf("Digite a nota do 3º Bimestre:");
    scanf("%f", &n3);
  printf("Digite a nota do 4º Bimestre:");
    scanf("%f", &n4);
  med = (n1 + n2 + n3 + n4) / 4;
    if (med >= 6.0){
      printf("Aluno APROVADO com média %f : ", med);
    } else {
      printf("Aluno REPROVADO com média %f : ", med);
    }
  return main();
}