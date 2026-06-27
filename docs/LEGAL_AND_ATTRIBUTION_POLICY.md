# Legal and Attribution Policy

## Purpose

This policy keeps the repository useful while reducing legal and attribution risk. It applies to all skills, references, templates, examples, scripts and documentation in this repository.

## Inspired by

Inspired by means a source helped shape topic coverage, taxonomy, workflow order, validation mindset or terminology choices at a high level.

Inspired by does not mean copied from. When using an external source for inspiration, rewrite the guidance in original language and cite the source in `NOTICE.md` when it materially influenced the repository.

## Companion skill

A companion skill is an external Agent Skill that can be installed or consulted separately. Companion skills are not vendored into this repository. They should be recommended when deeper specialist guidance is needed and when the user or agent environment has them installed.

## What must not be copied

Do not copy substantial external material into this repository without preserving the required license and notices.

Avoid copying:

- External `SKILL.md` bodies.
- README tables or long prose sections.
- Detailed examples, especially RIGHT/WRONG examples.
- Scripts or source code.
- Reference documents.
- Frontmatter descriptions.
- AndroidX, AOSP, Compose Multiplatform or other source-code excerpts.
- Screenshots, diagrams or generated assets from third-party repositories.

Short repository names, technology names and tiny factual references may be used for attribution and interoperability.

## Handling MIT sources

MIT-licensed sources allow reuse with attribution, but substantial copied portions require preserving the copyright and permission notices.

Preferred approach:

- Use MIT sources for ideas, taxonomy and comparison.
- Rewrite guidance in original language.
- Mention material inspiration in `NOTICE.md`.
- Preserve notices if substantial text or code is ever redistributed.

## Handling Apache-2.0 sources

Apache-2.0 sources require preservation of license and notice obligations when redistributed. Apache-2.0 also includes patent and NOTICE-related requirements that should not be ignored.

Preferred approach:

- Use Apache-2.0 sources for ideas and official workflow alignment.
- Do not copy long text, scripts, source code or examples.
- Cite the source in `NOTICE.md`.
- Preserve upstream license/notice material if substantial content is ever copied.

## Handling AndroidX and AOSP source references

AndroidX and AOSP source references are usually Apache-2.0 and may carry additional notices. Do not copy source files or long snippets into this repository unless the release explicitly preserves required notices and explains why redistribution is necessary.

For normal skill work, prefer linking concepts through original prose and official documentation references instead of embedding source material.

## Updating NOTICE.md

Update `NOTICE.md` when:

- A new external repository materially influences a skill.
- A companion skill source is added.
- Any substantial external content is copied or adapted.
- License information changes.
- A release adds a new topic area with new reference sources.

The notice should describe the source, known license, how it influenced the repo and whether content was copied or only used for inspiration.

## Release checklist

Before each release:

- Run `npm run check`.
- Confirm every `SKILL.md` has valid frontmatter.
- Confirm every local skill has `# Related existing skills` or documents why it does not apply.
- Review `NOTICE.md` for current external inspiration.
- Review `docs/COMPANION_SKILLS.md` when companion routing changes.
- Search for risky phrases such as `copied from`, `verbatim from`, `exact copy`, `TODO attribution` and `license unknown`.
- Confirm no external scripts or long examples were added accidentally.
- Confirm no secrets, tokens, service accounts, keystores or `.env` files were added.

## Risk signals

Treat these as review blockers until resolved:

- Identical or near-identical prose from an external skill.
- Identical tables from an external README or reference.
- Identical frontmatter descriptions.
- Copied RIGHT/WRONG examples.
- Copied scripts.
- Copied reference documents.
- External source code included directly.
- Missing license or notice for copied material.
- Attribution placeholders such as `TODO attribution`.

## Preferred resolution

When in doubt, rewrite. Keep the concept, remove the copied expression, cite the source as inspiration and validate that the result fits this repository's orchestration role.
