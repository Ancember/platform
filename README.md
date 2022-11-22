# Svelte + TS + Vite

Для установки проекта выполнить 


```
npm create vite@latest <myapp> -- --template svelte-ts

cd <myapp>

npm install

npm run dev
```
'myapp' -  имя проекта

# Сохранение в Git 
Создание локального репозитория:
```
git init
```
После достижения устойчивого состояния кода, следует выполнить коммит:
``` 
git add .
git comit -am 'Подробное пояснение к коммиту в соотв со стандартами предприятия'
```
При необходимости запушить 
```
git push <имя репозитория> <имя ветки>
```

для отправки в удалённый репозиторий
```
git remote add origin https://github.com/USERNAME/ИМЯ ПРОЕКТА.git
git branch -M main
git push -u origin main
```
