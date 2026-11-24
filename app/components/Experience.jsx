"use client";

const experiences = [
	{
		role: "Packaged App Development Associate",
		company: "Accenture",
		duration: "Jan, 2025 — Present",
		points: [
			"Built a full-stack expense tracking system with real-time analytics",
			"Developed a live scoring app with optimized state management",
			"Focused on scalable architecture and performance-driven design",
		],
	},
];

export default function Experience() {
	return (
		<section
			id="experience"
			className="px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16"
		>
			<div className="mx-auto max-w-7xl rounded-[2.25rem] border border-border bg-surface p-6 md:p-10 lg:p-12">
				<div className="grid gap-10 lg:grid-cols-[260px_1fr]">
					<div>
						<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
							Where I’m showing up
						</p>
						<h2 className="mt-3 font-serif text-4xl italic md:text-5xl">
							Experience
						</h2>
					</div>
					<article className="relative border-l border-border pl-7 md:pl-10">
						<span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-surface" />
						<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
							<div>
								<h3 className="text-xl font-semibold md:text-2xl">
									{experiences[0].role}
								</h3>
								<p className="mt-1 text-primary">
									{experiences[0].company} · Hyderabad
								</p>
							</div>
							<p className="rounded-full bg-surface-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-secondary">
								{experiences[0].duration}
							</p>
						</div>
						<p className="mt-6 max-w-2xl text-base leading-7 text-secondary">
							Building data-intensive enterprise interfaces with React and
							TypeScript, while growing toward full-stack systems, thoughtful
							APIs, and dependable developer experiences.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}
