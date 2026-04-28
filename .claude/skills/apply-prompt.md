---
name: apply-prompt
description: Read a prompt file from .prompts/inbox/, execute the instructions against the codebase, then move the file to .prompts/archive/ with a timestamp prefix.
---

The user wants to apply a queued prompt from the inbox. Follow these steps exactly:

## Step 1 — Find the prompt

List files in `.prompts/inbox/` (ignore `.gitkeep`). If there are multiple files, ask the user which one to apply. If there is exactly one, proceed with it. If the inbox is empty, tell the user and stop.

## Step 2 — Read and confirm

Read the prompt file and summarize what changes it calls for in 2–3 sentences. Ask the user to confirm before proceeding (unless they already said "yes, apply it" or similar).

## Step 3 — Execute

Apply the instructions in the prompt file to the codebase. Follow all project conventions in CLAUDE.md: single `index.html` file, CSS custom properties, established voice and tone, gender-neutral copy, no build tools.

## Step 4 — Archive

After the changes are complete, move the prompt file from `.prompts/inbox/<filename>` to `.prompts/archive/<YYYY-MM-DD>-<filename>` using today's date. Use `mv` via Bash.

## Step 5 — Report

Tell the user what was changed and confirm the file was archived. One or two sentences.
