Failed to compile.
./app/components/ui/DocumentContent.tsx:72:9
Type error: Object literal may only specify known properties, and 'listItem' does not exist in type 'Partial<{ block: OnlyChildrenComponent; paragraph: Component<{ children: ReactNode; textAlign: "center" | "end" | undefined; }>; blockquote: OnlyChildrenComponent; ... 6 more ...; table: Component<...>; }>'.
  70 |                 </ul>
  71 |             ),
> 72 |         listItem: ({ children }) => (
     |         ^
  73 |             <li className="flex items-start gap-3 text-[#FCEBD7]/70 text-base leading-relaxed">
  74 |                 <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E2494B] shrink-0" />
  75 |                 <span>{children}</span>
Next.js build worker exited with code: 1 and signal: null
Error: Command "npm run build" exited with 1
