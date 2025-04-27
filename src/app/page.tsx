import Head from "next/head";

export default function GreekMythologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Head>
        <title>Mitología Griega | Explorando los Mitos</title>
        <meta name="description" content="Descubre los dioses, héroes y criaturas de la mitología griega" />
      </Head>

      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          🏛 Mitología Griega
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-4">
            Explora las historias de Zeus, Hércules, el Minotauro y más. 
            ¡Pregúntale al chatbot para aprender!
          </p>
        </div>

        {/* Chat de n8n */}
        <div id="n8n-chat-container" className="border rounded-lg shadow-lg">
          <link 
            href={process.env.NEXT_PUBLIC_N8N_CHAT_CSS_URL} 
            rel="stylesheet" 
          />
          <script type="module" dangerouslySetInnerHTML={{
            __html: `
              import { createChat } from '${process.env.NEXT_PUBLIC_N8N_CHAT_SCRIPT_URL}';
              createChat({
                webhookUrl: '${process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL}',
                theme: { 
                  primaryColor: '#4f46e5',
                }
              });
            `
          }} />
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        <p>© {new Date().getFullYear()} Mitos Griegos - Creado con Next.js</p>
      </footer>
    </div>
  );
}