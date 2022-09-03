		let container = document.body.querySelector('.content-container');
		container.onmouseover = (event) => showOverview(event.target);
		container.onmouseout = (event) => hideOverview(event.target);

		const showOverview = (target) => {
			let movieElem = event.target.closest('.movie');
			if (!movieElem) return;

			let overview = movieElem.querySelector('.overview');
			
			if (movieElem.offsetHeight < overview.offsetHeight) {
				overview.style.height = movieElem.offsetHeight + 'px';
				overview.style.top = '0px';
			} else {
				overview.style.top = movieElem.offsetHeight - overview.offsetHeight + 'px';
			}
		}

		const hideOverview = (target) => {
			let movieElem = event.target.closest('.movie');
			if (!movieElem) return;

			let overview = movieElem.querySelector('.overview');
			overview.removeAttribute('style');
		}