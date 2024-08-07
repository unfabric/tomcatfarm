


const scriptsInEvents = {

	async GameEvent_Event4_Act7(runtime, localVars)
	{
		window.addEventListener('beforeunload', (event) =>  { runtime.callFunction('save')});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

