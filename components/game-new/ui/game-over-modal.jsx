import React from "react";

export function GameOverModal() {
  return (
    <UiModal
      width="md"
      isOpen={!!winnerSymbol}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Game over</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">John Smith</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UIButton size="md" variant="outline">
          Return
        </UIButton>
        <UIButton size="md" variant="primary">
          Play again
        </UIButton>
      </UiModal.Footer>
    </UiModal>
  );
}
