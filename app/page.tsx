import Image from 'next/image';
import Link from 'next/link';
import Logo from '../nextjs-github-pages/public/Images/cc2-header.png';
import style from './Components/page.module.css';

export default function Home() {
	return (
		<main className={style.main}>
			<div className={style.description}>
				<Image src={Logo} alt="CC2 Logo" style={{ width: '90vw' }} priority />
				<h1>Welcome to the Unofficial Carrier Command 2 Mod Development Wiki</h1>
				<h2>
					This wiki is intended to serve as a reference for anyone working on{' '}
					<a href="https://steamcommunity.com/app/1489630/workshop/">mods</a> for
					<a href="https://store.steampowered.com/app/1489630/Carrier_Command_2/">
						{' '}
						Carrier Command 2{' '}
					</a>
					by MicroProse/
					<a href="https://store.steampowered.com/developer/Geometa?snr=1_5_9__2000">
						{' '}
						Geometa{' '}
					</a>
					game
				</h2>

				<dl>
					<dt>
						<Link href="/GeneralModAdvice">General Mod Advice</Link>
					</dt>
					<dt>
						<Link href="/SaveEditing">Save Editing</Link>
					</dt>
					<dt>
						<Link href="/">3D Modelling</Link>
					</dt>
					<dt>
						<Link href="/">Control screens and Lua mods</Link>
					</dt>
					<dt>
						<Link href="/LuaScriptDebugging">Lua Script Debugging</Link>
					</dt>
					<dt>Mod Reference</dt>
					<dd>
						<Link href="/ModReferance/LuaFunctions">Lua Functions</Link> - getting map
						data, ui output etc
					</dd>
					<dd>
						{' '}
						<Link href="/ModReferance/Units">Units</Link> - ships, aircraft, vehicles
						etc
					</dd>
					<dd>
						<Link href="/ModReferance/Attachments">Attachments</Link> - cameras,
						turrets, guns, utility pods
					</dd>
					<dd>
						<Link href="/ModReferance/SpecialItems">Special Items</Link> -
						Units/Attachments that have special (non-modable) behaviour
					</dd>
					<dd>
						{' '}
						<Link href="/ModReferance/LuaGlobalVars">Lua Global vars</Link>
					</dd>
				</dl>
			</div>
		</main>
	);
}
