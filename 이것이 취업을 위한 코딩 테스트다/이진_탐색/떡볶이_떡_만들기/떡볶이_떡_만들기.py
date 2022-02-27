n, target = map(int, input().split())
arr = list(map(int, input().split()))

start, end = 0, max(arr)
result = 0;

while start <= end:
  mid = (start + end) // 2
  total = 0

  for length in arr:
    if length > mid:
      total += length - mid

  if total < target:
    end = mid - 1
  else:
    result = mid
    start = mid + 1

print(result)
