/* 
    There is no point creating separate files for small things. 
    All the contents modified may include modded content as well.
*/

const init = () => {
    /* Ask for permission to enable "cursed" mode. */
    Events.on(ClientLoadEvent, e => {
        Vars.ui.showCustomConfirm("$cursed.title", "$cursed.text", "$yes", "$no", () => {
            Vars.content.blocks().each(b => {
                if(b.size == 1) b.size = 3;
                if(b.size == 2) b.size = 4;
            });
        }, () => {
            Vars.ui.showCustomConfirm("$secret.title", "$secret.text", "$yes", "$no", () => {
                Core.app.openURI("https://youtu.be/dQw4w9WgXcQ");
            }, () => {
                Core.app.openURI("https://youtu.be/dQw4w9WgXcQ");
            });
        });
    });
};

init();
