import java.util.Arrays;
import java.util.Scanner;

public class 미래_도시 {
  public static int n, m, x, k;
  public static final int INF = (int)1e9;
  public static int[][] graph = new int[101][101];
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    n = sc.nextInt();
    m = sc.nextInt();

    for (int i = 1; i <= n; i++) {
      Arrays.fill(graph[i], INF);
    }

    for (int a = 1; a <= n; a++) {
      for (int b = 1; b <= n; b++) {
        if (a == b) graph[a][b] = 1;
      }
    }

    for (int i = 0; i < m; i++) {
      int a = sc.nextInt();
      int b = sc.nextInt();
      graph[a][b] = 1;
      graph[b][a] = 1;
    }

    x = sc.nextInt();
    k = sc.nextInt();

    for (int k = 1; k <= n; k++) {
      for (int a = 1; a <= n; a++) {
        for (int b = 1; b <= n; b++) {
          graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
        }
      }
    }

    int answer = graph[1][k] + graph[k][x];
    
    if (answer >= INF) {
      System.out.println(-1);
    } else {
      System.out.println(answer);
    }
  }
}
