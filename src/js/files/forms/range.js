// Підключення з node_modules
import * as noUiSlider from "nouislider"

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import "nouislider/dist/nouislider.css"

export function rangeInit() {
	const priceSliderItem = document.querySelector("[data-range]")
	if (priceSliderItem) {
		const priceSlider = priceSliderItem.querySelector(".range__line")
		let minPrice = priceSliderItem.getAttribute("data-min-price")
		let maxPrice = priceSliderItem.getAttribute("data-max-price")

		const priceStart = priceSliderItem.querySelector("[data-range-price-start]")
		const priceEnd = priceSliderItem.querySelector("[data-range-price-end]")

		noUiSlider.create(priceSlider, {
			start: [0, 200000], // [0,200000]
			connect: true,
			// step: 1000,
			// behaviour: "drag",
			range: {
				min: [Number(minPrice)],
				max: [Number(maxPrice)],
			},
			tooltips: {
				to: function (value) {
					return value.toFixed()
				},
			},
			// pips: {
			//   mode: "range",
			//   density: 5,
			//   // density: "none",
			// },
			/*
			format: wNumb({
				decimals: 0
			})
			*/
		})

		let formatValues = [priceStart, priceEnd]

		priceSlider.noUiSlider.on("update", function (values, handle, unencoded) {
			formatValues[handle].value = Math.round(values[handle])
		})

		priceStart.addEventListener("change", setPriceValues)
		priceEnd.addEventListener("change", setPriceValues)

		function setPriceValues() {
			let priceStartValue
			let priceEndValue
			if (priceStart.value != "") {
				priceStartValue = priceStart.value
			}
			if (priceEnd.value != "") {
				priceEndValue = priceEnd.value
			}
			console.log(priceStart.value, priceEnd.value)
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
		}
	}
}
rangeInit()
