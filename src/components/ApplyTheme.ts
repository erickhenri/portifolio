export function ApplyTheme() {
    const bodyElement = document.querySelector("body")

    if(!localStorage.theme) {
        const systemPreferenceTheme = matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";
		localStorage.setItem("theme", systemPreferenceTheme)
    }

    if(localStorage.theme === "dark") {
        bodyElement?.classList.add("dark");
    } 
    if(localStorage.theme === "light"){
        bodyElement?.classList.remove("dark");
    }
}