@@
-import React from 'react';
+import React from 'react';
+// Use ONE of these imports, depending on your tsconfig path aliases:
+import WelcomeCover from '@/components/WelcomeCover';
+// or:  import WelcomeCover from '../WelcomeCover';
@@
 export default function ChatWindow(props: any) {
-  const { messages } = props; // or however your file gets messages
+  const { messages } = props; // adjust if your file uses a store/context
+  const isEmpty = !Array.isArray(messages) || messages.length === 0;

   return (
     <div className="flex h-full flex-col">
       <div className="flex-1">
-        <MessageList messages={messages} />
+        {isEmpty ? <WelcomeCover /> : <MessageList messages={messages} />}
       </div>
       {/* keep your composer/input as-is */}
       <PromptBar /* ... */ />
     </div>
   );
 }
