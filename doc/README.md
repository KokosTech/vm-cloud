# ВОТ - 2-ри срок

## Elastic Search

Elastic Search е база данни, която се използва за търсене на данни. Тя е написана на Java и е open source. Тя е базирана на Apache Lucene и е разработена от Elastic. Използва се най-често за логове и анализиране на данни.

### Писане на логове - за trace-ване на activity

Log-овете са обикновено в следния формат:

```
[timestamp][log_level][stacktrace][message]
```

Като има два стандарта за log level severity (един правилен и един грешен)

- Linux (0-9)
- Windows - (0-7)

Идеята за Elastic Search е дошла от нуждата да се избегне четене на стотици log файлове (от Oracle)

Ползват библиотека на Apache (Lucene), която е написана на Java. И така създават Elastic Search

Elasticsearch – база данни, за работа със документи със текстова информация

- Logstash – централизиран интерфейс за работа с еластик сърч, вкарва документи в базата данни; много усъвършенстван аргумент
- Kibana – визуализация на данните от еластик сърч, визуално предава инфото събрано от logstash; много powerful инструмент за визуализация

Примерен log:

```
2022-03-22  16:11:032  ERROR  “nullpointerexception”  “oops!”
0-9
```

### Каква е идеята за Elastic Search?

- Elastic search ползва нещо като нерелационна база данни – търси бързо по определен критерий

```
----------------------------------------------------
| id | timestamp | severity | stacktrace | message |
----------------------------------------------------
| 0 | 2022-03-22 |  ERROR   |   NULLPE   |  oops!  |
|   |  16:11:32  |          |            |         |
----------------------------------------------------
```

- Извеждаме `severity` в друга таблица – там са само 9 записа константно, спестяваме памет
- Вместо горното, може да ползваме граф - имамекорен, чиито деца са severity, чиито деца са обекти - хеш таблица, в които има pointer към графи за stacktrace и message (един за всички hashtable-и) като value, а като ключ - timestamp. Така скоростта на търсене в граф е O(log(n)), а за hashtable - O(1)
- Ако искаме повече полета, ползваме още един граф
- Elastic Search има много алгоритми за обработка на език и запазва само най-есенциалното, като няма информационен излишък
- За да се възстанови наново изречението, както е било (с информационен излишък) се ползва математически модел на езика

## Serverless

input -> event (trigger, processing -> trigger) -> trigger (result)

### Amazon Lambda

AWS Lambda - абстрахираме се от всичко и се концентрираме върху писането на апликацията и функционалността. Подава функция, тя става на контейнер. Той се run-ва, като този контейнер се запазва _някъде_

### Виртуализиране на функция

Трябва Storage -> Object Storage. Това го прави _безкрайно_ скалируемо

`[func] -> [container] -> run -> result`

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

Object Storage-a и функцията са на cloud. Трябва и самите тригери да са на cloud. # В AWS има Cloud за всичко

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

_Записки за Serverless предоставени от Тишо <3_

## Serverless & Lambda (Google Bard)

Serverless computing is a cloud computing model in which the cloud provider takes care of all the infrastructure management, including provisioning and managing servers, operating systems, networking, and storage. This frees developers from having to worry about the underlying infrastructure, so they can focus on developing their applications.

AWS Lambda is a serverless computing service that lets you run code without provisioning or managing servers. You can create Lambda functions that are triggered by events, such as HTTP requests, file uploads, or database changes. Lambda functions can be used to perform a variety of tasks, such as processing data, generating content, and responding to events.

Here are some of the benefits of using serverless computing and AWS Lambda:

- **_Scalability:_** Serverless computing is highly scalable, so you can easily add or remove capacity as needed. This can help you save money on infrastructure costs.
- **_Cost-effectiveness:_** Serverless computing can be more cost-effective than traditional on-premises or cloud computing solutions. This is because you only pay for the resources that you use.
- **_Ease of use:_** Serverless computing is easy to use, even for developers who are not familiar with cloud computing. This is because you do not need to worry about provisioning or managing servers.

If you are looking for a scalable, cost-effective, and easy-to-use cloud computing solution, then serverless computing and AWS Lambda are good options to consider.

Here are some examples of how AWS Lambda can be used:

- **_Processing data:_** Lambda functions can be used to process large amounts of data in real time. For example, you could use Lambda to process sensor data from a manufacturing plant or financial data from a stock exchange.
- **_Generating content:_** Lambda functions can be used to generate content, such as news articles, blog posts, or social media posts. For example, you could use Lambda to generate weather forecasts or sports scores.
- **_Responding to events:_** Lambda functions can be used to respond to events, such as HTTP requests, file uploads, or database changes. For example, you could use Lambda to send an email notification when a new customer signs up for your service or to create a new record in a database when a file is uploaded.

If you are looking for a way to use serverless computing to build your next application, then AWS Lambda is a good option to consider.
