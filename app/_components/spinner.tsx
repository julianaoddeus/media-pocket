"use client";

export function FullscreenLoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="ml-4 text-primary">Carregando sessão...</p>
    </div>
  );
}
