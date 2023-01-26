<script>
    import boop from "./boop.js";
    export let boopParams;
    let isBooped = false;

    // Is there a more Svelte-y way to do this?
    function setIsBooped(val) {
        isBooped = val;
    }

    function triggerBoop() {
        isBooped = true;
    }
</script>

<!-- <BoopAction boopParams={{ rotation: 20, timing: 200}}>
	<HelpButton></HelpButton>
</BoopAction>
<BoopAction boopParams={{ scale: 1.2, timing: 200}}>
	<HelpButton></HelpButton>
</BoopAction>
<BoopAction boopParams={{ y: 5, timing: 200}}>
	<HelpButton></HelpButton>
</BoopAction> -->

<!-- trigger onclick so demo works on mobile -->
<span
    on:mouseenter={triggerBoop}
    on:click={triggerBoop}
    use:boop={{ isBooped, ...boopParams, setter: setIsBooped }}
>
    <slot />
</span>
