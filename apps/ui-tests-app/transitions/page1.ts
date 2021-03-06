import frame = require("ui/frame");

export function onTap(args) {
    var navigationEntry = {
        moduleName: "transitions/page0",
        animated: true,
        transition: {
            name: args.object.tag,
            duration: 380,
            curve: "easeIn"
        }
    };
    frame.topmost().navigate(navigationEntry);
}
