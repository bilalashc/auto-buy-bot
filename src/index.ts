import puppeteer from "puppeteer";

async function testPuppeteer() {
    //Launch a headless browser
    const browser = await puppeteer.launch({headless: true})

    try {
        //Open a new page
        const page = await browser.newPage();

        //Go to http//www.example.com
        await page.goto("http://www.google.com", {waitUntil: 'networkidle2'})

    } catch (error){
        console.error(error, "Error: Cannot access Puppeteer API")
    } finally {
        browser.close()
    }

}