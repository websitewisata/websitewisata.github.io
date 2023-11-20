const $ = str => document.querySelector(str);
const $$ = str => document.querySelectorAll(str);

(function() {
	if (!window.app) {
		window.app = {};
	}
	app.comments = {
		removeClass: function(el, classname='') {
			if (el) {
				if (classname === '') {
					el.className = '';
				} else {
					el.classList.remove(classname);
				}
				return el;
			}
			return;
		},
		reorder: function() {
			let childcnt = $("#comments").children.length;
			let childs = $("#comments").children;

			for (let j=0; j< childcnt; j++) {
				childs[j].dataset.pos = j;
			}
		},
		move: function(el) {
			let active = el;

			if (typeof el === "string") {
			console.log(`got string: ${el}`);
				active = (el == "next") ? $(".active").nextElementSibling : $(".active").previousElementSibling;
				console.dir(active);
			}

			let curpos = parseInt(app.active.dataset.pos);
			let tgtpos = parseInt(active.dataset.pos);

			let cnt = curpos - tgtpos;
			let dir = (cnt < 0) ? -1 : 1;
			let shift = Math.abs(cnt);

			for (let i=0; i<shift; i++) {
				let el = (dir == -1) ? $("#comments").firstElementChild : $("#comments").lastElementChild;

				if (dir == -1) {
					el.dataset.pos = $("#comments").children.length;
					$('#comments').append(el);
				} else {
					el.dataset.pos = 0;
					$('#comments').prepend(el);
				}

				app.comments.reorder();
			}


			app.active = active;
			let next = active.nextElementSibling;
			var prev = active.previousElementSibling;
			var prevSecond = prev ? prev.previousElementSibling : active.parentElement.lastElementChild;
			var nextSecond = next ? next.nextElementSibling : active.parentElement.firstElementChild;
			
			active.className = '';
			active.classList.add("active");

			app.comments.removeClass(prev).classList.add('prev');
			app.comments.removeClass(next).classList.add('next');

			app.comments.removeClass(nextSecond).classList.add("gambarkanan2");
			app.comments.removeClass(prevSecond).classList.add("gambarkiri2");

			app.comments.nextAll(nextSecond).forEach(item=>{ item.className = ''; item.classList.add('hideRight') });
			app.comments.prevAll(prevSecond).forEach(item=>{ item.className = ''; item.classList.add('hideLeft') });
		},		
		previous: function(e) {
			app.comments.move('prev');
		},
		next: function(e) {
			app.comments.move('next');
		},
		doDown: function(e) {
		console.log(`down: ${e.x}`);
			app.comments.state.downX = e.x;
		},
		doUp: function(e) {
		console.log(`up: ${e.x}`);
			let direction = 0,
				velocity = 0;

			if (app.comments.state.downX) {
				direction = (app.comments.state.downX > e.x) ? -1 : 1;
				velocity = app.comments.state.downX - e.x;

				if (Math.abs(app.comments.state.downX - e.x) < 10) {
					app.comments.select(e);
					return false;
				}
				if (direction === -1) {
					app.comments.move('next');
				} else {
					app.comments.move('prev');
				}
				app.comments.state.downX = 0;
			}
		},
		init: function() {
			document.addEventListener("keydown", app.comments.keypress);
			$("#comments").addEventListener("mousedown", app.comments.doDown);
			$("#comments").addEventListener("touchstart", app.comments.doDown);
			$("#comments").addEventListener("mouseup", app.comments.doUp);
			$("#comments").addEventListener("touchend", app.comments.doup);

			app.comments.reorder();
			$('#prev').addEventListener("click", app.comments.previous);
			$('#next').addEventListener("click", app.comments.next);
			app.active = $(".active");
		},
		state: {}
	}
	app.comments.init();
})();