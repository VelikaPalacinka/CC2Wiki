import Link from 'next/link';
import style from './page.module.css';

export default function NavLink() {
	return (
		<div className={style.nav}>
			<Link href="/">Home</Link>
			<Link href="/GeneralModAdvice">General Mod Advice</Link>
			<Link href="/SaveEditing">Save Editing</Link>
			<Link href="/">3D Modelling</Link>
			<Link href="/">Control screens and Lua mods</Link>
			<Link href="/LuaScriptDebugging">Lua Script Debugging</Link>
			<Link href="/ModReferance/LuaFunctions">Lua Functions</Link>
			<Link href="/ModReferance/Units">Units</Link>
			<Link href="/ModReferance/Attachments">Attachments</Link>
			<Link href="/ModReferance/SpecialItems">Special Items</Link>
			<Link href="/ModReferance/LuaGlobalVars">Lua Global vars</Link>
		</div>
	);
}
