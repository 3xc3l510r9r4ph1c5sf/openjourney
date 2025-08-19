"use client";

import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { CanvasArea } from '@/components/canvas/CanvasArea';
import { PropertiesPanel } from '@/components/panels/PropertiesPanel';
import { ToolDock } from '@/components/tools/ToolDock';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { ModalsContainer } from '@/components/modals/ModalsContainer';
import { Toast } from '@/components/ui/Toast';
import { useCanvasStore } from '@/store/canvasStore';
import { useUIStore } from '@/store/uiStore';

export default function OroOSPage() {
  const { layers, activeLayerIndex, createNewLayer } = useCanvasStore();
  const { toast } = useUIStore();

  useEffect(() => {
    // Initialize with background layer
    if (layers.length === 0) {
      createNewLayer("Background", true);
    }
  }, [layers.length, createNewLayer]);

  return (
    <div className="oro-os-container">
      {/* Bauhaus-inspired geometric background */}
      <div className="bauhaus-bg">
        <div className="geometric-shape shape-1" />
        <div className="geometric-shape shape-2" />
        <div className="geometric-shape shape-3" />
      </div>

      <div className="oro-layout">
        <Header />
        
        <main className="oro-main">
          <CanvasArea />
          <PropertiesPanel />
        </main>

        <ToolDock />
        <ChatWidget />
        <ModalsContainer />
        
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
          />
        )}
      </div>
    </div>
  );
}