// IntersectionObserver-based reveal-on-scroll.
// Adds `.is-visible` to every element matching the selector once it enters the viewport.
// Safe under SSR (vite-ssg) — no-ops when `window` is not defined.
import { onMounted, onBeforeUnmount } from "vue"


export function useReveal(selector = ".reveal", { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = {}) {
    if (typeof window === "undefined") return

    let observer = null

    onMounted(() => {
        const els = document.querySelectorAll(selector)
        if (!("IntersectionObserver" in window)) {
            // Graceful fallback: just show everything.
            els.forEach(el => el.classList.add("is-visible"))
            return
        }

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible")
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold, rootMargin })

        els.forEach(el => observer.observe(el))
    })

    onBeforeUnmount(() => {
        if (observer) observer.disconnect()
    })
}
