<template>

<div class="container">
	<header class="header-block relative">
		<nav class="header-nav relative z-20 flex justify-between items-center py-8 px-64">
			<a href="http://" class="nav-link">О КОМПАНИИ</a>
			<a href="http://" class="nav-link">КАТАЛОГ</a>
			<a href="http://" class="nav-link">КОНТАКТЫ</a>
			<img src="../public/Logo.png" alt="icon ipan" class="nav-icon">
			<a class="nav-link-tel" href="tel:+7-800-012-3456">8 800 012-34-56</a>
			<button class="nav-btn flex flex-row justify-center items-center py-1 px-4">
				<img class="nav-btn-image" src="../public/icon-btn.png" alt="icon btn">
				СКАЧАТЬ ПРЕЗЕНТАЦИЮ
			</button>
		</nav>
		<div class="nav-blur absolute left-0 top-0 z-10"></div>
		<img src="../public/food.png" class="header-image absolute top-0 z-0 w-full" alt="food image">
	</header>

	<main class="main-block absolute">
		<img class="main-block-icon absolute top-0 left-7" src="../public/Yarlik.png" alt="icon eu">
		<div class="main-block-frame absolute flex justify-between items-center">
			<img src="../public/Rectangle-234.png" alt="icon frame">
			<h1 class="main-block-title absolute">Умная посуда <br>для приготовления</h1>
			<img class="main-block-line absolute" src="../public/Rectangle-233.png" alt="icon line">
			<p class="main-block-text absolute">
				Благодаря высокотехнологичному стойкому гранитному покрытию посуда iPAN готовит с минимальным количеством масла, сохраняя максимальную пользу продуктов, в том числе может готовить на пару и обеспечивает безопасность использования на любых поверхностях.
			</p>
		</div>
	</main>


	<article class="article-block flex items-center px-64">
		<div class="">
			<h2 class="article-block-title">Высокие технологии производства</h2>
			<img class="article-block-line inline-block" src="../public/Rectangle-447.png" alt="icon line">
			<p class="article-block-text">
				Благодаря высокотехнологичному стойкому гранитному покрытию посуда iPAN готовит без продуктов. Благодаря высокотехнологичному стойкому гранитному покрытию посуда iPAN готовит без продуктов. Благодаря высокотехнологичному стойкому гранитному покрытию посуда iPAN готовит без продуктов. Благодаря высокотехнологичному стойкому гранитному покрытию посуда iPAN готовит без продуктов.
			</p>
			<img class="article-block-icon inline-block" src="../public/Слой-2.png" alt="icon ilag">
		</div>
		<div class="">
			<ul class="article-block-item">
				<li class="flex pb-6 items-center">
					<img class="article-block-icon" src="../public/icon-Pokr.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">Гранитное покрытие</span>
				</li>
				<li class="flex pb-6 items-center">
					<img class="article-block-icon" src="../public/Индукция.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">Для индукционной плиты</span>
				</li>
				<li class="flex items-center pb-6">
					<img class="article-block-icon" src="../public/Посудомойка.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">машинная мойка</span>
				</li>
				<li class="flex items-center pb-6">
					<img class="article-block-icon" src="../public/icon-Al.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">Высокопрочное дно</span>
				</li>
				<li class="flex items-center pb-6">
					<img class="article-block-icon" src="../public/193237.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">5 Лет гарантии</span>
				</li>
				<li class="flex items-center pb-6">
					<img class="article-block-icon" src="../public/Листья.png" alt="icon benefit">
					<img class="article-list-line" src="../public/Rectangle-445.png" alt="icon line">
					<span class="article-block-list block">PFOA FREE</span>
				</li>
		</ul>
		</div>
	</article>


	<div>
		<img class="article-line-y" src="../public/Rectangle-236.png" alt="icon line">
	</div>







</div>




</template>




<script>

</script>




<style>
@font-face {
	font-display: block;
  font-family: "StemMedium";
  src: url("assets/fonts/Stem-Medium.ttf")
}
@font-face {
	font-display: block;
  font-family: "StemRegular";
	src: url("assets/fonts/Stem-Regular.ttf")
}
@font-face {
	font-display: block;
  font-family: "StemSemiLight";
	src: url("assets/fonts/Stem-SemiLight.ttf")
}
@font-face {
	font-display: block;
  font-family: "ComforterRegular";
	src: url("assets/fonts/Comforter-Regular.ttf")
}
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	text-decoration: none;
	list-style: none;
	border: 1px solid red;
	/* font-family: ComforterRegular; */
	color: #151414;
}
.header-nav {
	font-family: "StemMedium";
	font-size: 14px;
	line-height: 17px;
	height: 110px;
	filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.04)) drop-shadow(0px 10px 80px rgba(0, 0, 0, 0.06));
}
.nav-blur {
width: 100%;
height: 110px;

box-shadow: 0px 6px 10px 0px #0000000A;

background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(20px);
/* Note: backdrop-filter has minimal browser support */
}
.nav-btn {
border: 1px solid #151414;
box-sizing: border-box;
border-radius: 3px;
}
.nav-icon {
width: 156px;
}
.main-block {
	top: 516px;
	left: 537px;
	width: 847px;
	height: 516px;
	background-image: url(../public/Rectangle-235.png);
	filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.06)) drop-shadow(0px 10px 80px rgba(0, 0, 0, 0.1));
}
.main-block-frame {
	left: 145px;
	top: 68px;
}
.main-block-title {
	font-weight: 350;
	font-size: 36px;
	line-height: 130%;
	width: 439px;
	text-transform: uppercase;
	top: 20px;
	left: 59px;
	text-align: center;
}
.main-block-line {
	left: 208px;
	top: 161px;
}
.main-block-text {
	Width: 515px;
	Height: 150px;
	font-weight: 350;
	font-size: 18px;
	line-height: 140%;
	left: 23px;
	bottom: 0px;
	text-align: center;
	letter-spacing: 0.04em;
}
.article-block {
	padding-top: 1022px;
	width: 100%;
}
.article-block-title {
	font-weight: 350;
	font-size: 36px;
	line-height: 130%;
}
.article-block-line {
	padding-top: 15px;
	padding-bottom: 36px;
}
.article-block-text {
	width: 626px;
	font-weight: 350;
	font-size: 18px;
	line-height: 140%;
	letter-spacing: 0.04em;
	padding-bottom: 36px;
}
.article-block-icon {
	
}
.article-block-item {
	text-transform: uppercase;
	font-weight: 500;
	font-size: 14px;
	line-height: 31px;
	letter-spacing: 0.04em;
	padding-left: 127px;
}
.article-list-line {
	margin-left: 20px;
	margin-right: 20px;
	background: linear-gradient(109.2deg, #EA3F3F 4.98%, #FC6969 100%);
	border-radius: 1px;
	width: 22px;
	height: 1px;
}
.article-line-y {
	width: 140px;
	height: 2px;
	background: linear-gradient(152.95deg, #FF667E 8.03%, #D44036 83.1%);
	transform: rotate(-90deg);
}

</style>
