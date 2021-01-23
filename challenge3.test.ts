import { Widgets } from "./pages/Widgets"
describe ("getSums", ()=> {
    let widget = new Widgets ();
    beforeEach(async()=> {
        await widget.navigate();
    });
    afterAll(async()=> {
        await widget.driver.quit();
    });
    test ("We got Sum", async ()=> {
        await widget.addNumber(845, 999);
        let results = await widget.getSum();
        expect(results).toBe(1844);
        console.log("First time I've done math since High School");
    });
});