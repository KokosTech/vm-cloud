# ВОТ - 2-ри срок

## Elastic Search

## Serverless

input -> event (trigger, processing -> trigger) -> trigger (result)

### Amazon Lambda

AWS Lambda - абстрахираме се от всичко и се концентрираме върху писането на апликацията и функционалността. Подава функция, тя става на контейнер. Той се run-ва, като този контейнер се запазва *някъде*

### Виртуализиране на функция

Трябва Storage -> Object Storage. Това го прави *безкрайно* скалируемо

`
[func] -> [container] -> run -> result
`

Примерен псевдокод (на python) - state: 

```python
# python
def main(a, b):   # a, b -> object storage
  c = a + b
  return c
```
(това цялото е state)

-> main 1, 2
-> click 
-> 
-> HTTP request
-> I/O

Object Storage-a и функцията са на cloud. Трябва и самите тригери да са на cloud. # В AWS има Cloud  за всичко

Има и handler - един handler държи 5000 request-а в секунда. Когато станат повече, се създава нов контейнер, което е реално безкрайно скалируемо (пак)

В AWS плащаме не за lambda function, а за execution. Примерно се плаща по 0.0001$ на всеки execution

За да се (виждат?вдигат) други функции, те също трябва да са lambda functions. 

-> HTTP req 
-> lambda -> DB ->(unsuccessful) -> lambda
-> S3 -> lambda
-> ...

Тук обаче идва и един голям проблем, че ако трябва да се прави такъв цикъл из функциите, то ще струва изключително солено. Процентът от печалбата на Amazon идва точно от експлатацията на това - зациклянето на lambda функциите. 

cold boot of a function:
  func -> [[container(60s) -> init(10s)]] -> exec(ms) -> (result)
  
[[]] - тези не случват винаги (само на cold), само в следните ситуации се изпълнпват: 

- first run (cold boot)
- scale out (при създаване на нов контейнер (примерно при достигане на лимита на заявки - 5001) 
- patch - при модификация

Cold Boot обаче може да трае до цели 30мин.

Най-добрият пример на пазара за ползване на serverless са Netflix, където цялата им платформа е lambda function, като те нямат централизиран сървър. 

AWS имат лимитазия за execution time-a на една функция, който е от сорта на минута и половина. Една lambda function вдига контейнер.

*Записки за Serverless предоставени от Тишо <3*