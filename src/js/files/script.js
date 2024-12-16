// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoaded)

function pageLoaded() {
	// Select all image blocks in the test section
	const testCards = document.querySelectorAll(".test__item")

	if (testCards.length > 0) {
		testCards.forEach(card => {
			const imageBlock = card.querySelector(".test__image-block")
			const testImages = imageBlock ? imageBlock.querySelectorAll(".test__image") : []

			if (testImages.length > 0) {
				let currentIndex = 0 // Текущий индекс картинки
				let interval // Интервал для анимации

				// Функция для запуска анимации
				const startRotation = () => {
					clearInterval(interval)

					// Сразу показываем следующее изображение, чтобы не ждать 3 сек
					currentIndex = (currentIndex + 1) % testImages.length
					updateImages()

					interval = setInterval(() => {
						currentIndex = (currentIndex + 1) % testImages.length
						updateImages()
					}, 3000)
				}

				// Функция для остановки анимации
				const stopRotation = () => {
					clearInterval(interval)
					updateImages() // Обновляем текущий индекс сразу
				}

				// Функция для обновления видимых изображений
				const updateImages = () => {
					testImages.forEach((image, index) => {
						image.style.opacity = index === currentIndex ? "1" : "0"
					})
				}

				// Инициализация стилей для картинок
				testImages.forEach((image, index) => {
					image.style.transition = "opacity 0.5s ease"
					image.style.opacity = index === 0 ? "1" : "0" // Показываем первую картинку
				})

				// Добавляем слушатели событий
				card.addEventListener("mouseenter", startRotation)
				card.addEventListener("mouseleave", stopRotation)
			}
		})
	}
}
