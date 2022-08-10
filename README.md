#Конвертер валют

<h2>
    Описание
</h2>
<h3>
    Header с курсом валют
</h3>
<ul>
    <li>
        В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH)
    </li>
    <li>
        Актуальный курс валют должен приходить с любого публичного API
    </li>
</ul>

<h3>
    Компонент с конвертацией
</h3>
<ul>
    <li>
        Для одной валюты должен быть свой input и select. 
    </li>
    <li>
        отдельный input + select для первой валюты, и отдельный input + select для второй валюты
    </li>
    <li>
        в input задается число, чтобы указать кол-во единиц для конвертирования
    </li>
    <li>
        в select должно быть не менее трех валют - UAH, USD, EUR.    
    </li>
    <li>
        конвертация должна происходить в обоих направлениях     
        <ul>
            <li>
                при изменении значения в первой валюте, должно пересчитываться значение во второй, и наоборот            
            </li>
            <li>
                при изменении валюты в каждом select-е, конвертация обеих валют должна пересчитываться корректно            
            </li>
        </ul>
    </li>
</ul>

<h3>
    Плюсом будет:
</h3>
<ul>
    <li>
        Хорошо продуманный интерфейс и внешний вид
    </li>
    <li>
        Чистый код
    </li>
</ul>
<h3>
    Для реализации используйте
</h3>
<ul>
    <li>
        React JS либо Angular 2+
    </li>
</ul>