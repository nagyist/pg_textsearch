window.BENCHMARK_DATA = {
  "lastUpdate": 1767584672814,
  "repoUrl": "https://github.com/timescale/pg_textsearch",
  "entries": {
    "msmarco Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "id": "32f6bfa8072f662af9a60d8c8aa261928cbe4355",
          "message": "Remove ParadeDB benchmark publishing to public dashboard

Keep competitive benchmark results in workflow logs and artifacts only,
without publishing to the GitHub Pages dashboard. Results are still
collected but not publicly graphed.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-05T02:16:32Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/32f6bfa8072f662af9a60d8c8aa261928cbe4355"
        },
        "date": 1767584672098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "msmarco (8.8M docs) - Index Build Time",
            "value": 521752.28,
            "unit": "ms"
          },
          {
            "name": "msmarco (8.8M docs) - Avg Query Latency (20 queries)",
            "value": 137.62,
            "unit": "ms"
          },
          {
            "name": "msmarco (8.8M docs) - Index Size",
            "value": 2211.21,
            "unit": "MB"
          }
        ]
      }
    ],
    "cranfield Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "55a8b6c71318a0df49fe9dabbc2e8401503fb3a0",
          "message": "Fix JSON generation in extract_metrics.sh (#73)

Use jq for proper JSON formatting instead of heredoc string
interpolation. This handles empty/null values correctly and avoids
malformed JSON.",
          "timestamp": "2025-12-16T02:54:28Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/55a8b6c71318a0df49fe9dabbc2e8401503fb3a0"
        },
        "date": 1765860275252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield - Index Build Time",
            "value": 238.159,
            "unit": "ms"
          },
          {
            "name": "cranfield - Short Query (1 word)",
            "value": 3.379,
            "unit": "ms"
          },
          {
            "name": "cranfield - Medium Query (3 words)",
            "value": 4.656,
            "unit": "ms"
          },
          {
            "name": "cranfield - Long Query (question)",
            "value": 3.867,
            "unit": "ms"
          },
          {
            "name": "cranfield - Common Term Query",
            "value": 3.648,
            "unit": "ms"
          },
          {
            "name": "cranfield - Rare Term Query",
            "value": 2.704,
            "unit": "ms"
          },
          {
            "name": "cranfield - Avg Query Latency (20 queries)",
            "value": 4.06,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c80221e1ec07cfcfb80ea12afe6ac77a2776d12f",
          "message": "Extract and publish metrics per-dataset when running all benchmarks (#75)

## Summary
- When running `dataset=all`, metrics are now extracted separately for
each dataset
- Each dataset (Cranfield, MS MARCO, Wikipedia) gets its own benchmark
chart
- Previously, only the first dataset's results were captured

## Changes
- `extract_metrics.sh` now accepts optional section parameter to extract
from log sections
- Workflow runs extract_metrics.sh once per dataset when running \"all\"
- Separate benchmark-action publish steps for each dataset

## Testing
Trigger a benchmark run with `dataset=all` to verify all three datasets
appear separately in the results.",
          "timestamp": "2025-12-16T17:18:32Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/c80221e1ec07cfcfb80ea12afe6ac77a2776d12f"
        },
        "date": 1765916949001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield - Index Build Time",
            "value": 270.157,
            "unit": "ms"
          },
          {
            "name": "cranfield - Short Query (1 word)",
            "value": 3.13,
            "unit": "ms"
          },
          {
            "name": "cranfield - Medium Query (3 words)",
            "value": 4.225,
            "unit": "ms"
          },
          {
            "name": "cranfield - Long Query (question)",
            "value": 3.436,
            "unit": "ms"
          },
          {
            "name": "cranfield - Common Term Query",
            "value": 3.183,
            "unit": "ms"
          },
          {
            "name": "cranfield - Rare Term Query",
            "value": 2.352,
            "unit": "ms"
          },
          {
            "name": "cranfield - Avg Query Latency (20 queries)",
            "value": 4.05,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b423ca362f278eedc868953d940a15a4ee6ea0e",
          "message": "Improve benchmark configuration and add index size tracking (#76)

## Summary

- Tune Postgres settings for ubuntu-latest runner (4 vCPUs, 16GB RAM):
  - `shared_buffers`: 1GB → 4GB (25% of RAM)
  - `effective_cache_size`: 2GB → 12GB (75% of RAM)
  - `maintenance_work_mem`: 256MB → 512MB
- Add more aggressive disk cleanup (swift, powershell, ghcup) to free
~10GB additional space
- Add index and table size reporting to all benchmark datasets with
standardized output
- Track index size over time in benchmark dashboard (displayed in MB)
- Show index/table sizes in GitHub job summary

## Testing

- [ ] Manually trigger benchmark workflow to verify new metrics are
captured",
          "timestamp": "2025-12-16T22:14:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1b423ca362f278eedc868953d940a15a4ee6ea0e"
        },
        "date": 1765924498779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield - Index Build Time",
            "value": 245.552,
            "unit": "ms"
          },
          {
            "name": "cranfield - Short Query (1 word)",
            "value": 3.198,
            "unit": "ms"
          },
          {
            "name": "cranfield - Medium Query (3 words)",
            "value": 4.219,
            "unit": "ms"
          },
          {
            "name": "cranfield - Long Query (question)",
            "value": 3.415,
            "unit": "ms"
          },
          {
            "name": "cranfield - Common Term Query",
            "value": 5.681,
            "unit": "ms"
          },
          {
            "name": "cranfield - Rare Term Query",
            "value": 2.359,
            "unit": "ms"
          },
          {
            "name": "cranfield - Avg Query Latency (20 queries)",
            "value": 3.99,
            "unit": "ms"
          },
          {
            "name": "cranfield - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b423ca362f278eedc868953d940a15a4ee6ea0e",
          "message": "Improve benchmark configuration and add index size tracking (#76)

## Summary

- Tune Postgres settings for ubuntu-latest runner (4 vCPUs, 16GB RAM):
  - `shared_buffers`: 1GB → 4GB (25% of RAM)
  - `effective_cache_size`: 2GB → 12GB (75% of RAM)
  - `maintenance_work_mem`: 256MB → 512MB
- Add more aggressive disk cleanup (swift, powershell, ghcup) to free
~10GB additional space
- Add index and table size reporting to all benchmark datasets with
standardized output
- Track index size over time in benchmark dashboard (displayed in MB)
- Show index/table sizes in GitHub job summary

## Testing

- [ ] Manually trigger benchmark workflow to verify new metrics are
captured",
          "timestamp": "2025-12-16T22:14:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1b423ca362f278eedc868953d940a15a4ee6ea0e"
        },
        "date": 1765926060457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield - Index Build Time",
            "value": 243.511,
            "unit": "ms"
          },
          {
            "name": "cranfield - Short Query (1 word)",
            "value": 3.105,
            "unit": "ms"
          },
          {
            "name": "cranfield - Medium Query (3 words)",
            "value": 4.189,
            "unit": "ms"
          },
          {
            "name": "cranfield - Long Query (question)",
            "value": 3.432,
            "unit": "ms"
          },
          {
            "name": "cranfield - Common Term Query",
            "value": 3.149,
            "unit": "ms"
          },
          {
            "name": "cranfield - Rare Term Query",
            "value": 2.324,
            "unit": "ms"
          },
          {
            "name": "cranfield - Avg Query Latency (20 queries)",
            "value": 4,
            "unit": "ms"
          },
          {
            "name": "cranfield - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "09e726021418ac873b9d6878f9ddd6dae68230ae",
          "message": "Improve benchmark dashboard: dataset sizes and compact layout (#77)

## Summary

- Include document count in benchmark metric names (e.g., \"msmarco (8.8M
docs) - Index Build Time\")
- Create 3-column responsive grid layout for benchmark dashboard
(responsive down to 1 column on mobile)
- Auto-deploy updated index.html to gh-pages after benchmarks run

## Changes

**format_for_action.sh**: Format document counts (1.4K, 8.8M, etc.) and
include in metric names

**benchmarks/gh-pages/index.html**: New compact layout with:
- 3-column grid (responsive)
- Smaller chart sizes
- Cleaner styling
- Dataset sections with headers

**benchmark.yml**: Add step to deploy updated index.html to gh-pages",
          "timestamp": "2025-12-16T23:30:56Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/09e726021418ac873b9d6878f9ddd6dae68230ae"
        },
        "date": 1765928997911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 243.876,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.117,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.191,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.404,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.154,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.325,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.04,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "36502f82bb9a840caebdb974afa425352d7d0956",
          "message": "Reclaim pages after segment compaction (#78)

## Summary
- Add page reclamation during segment compaction to prevent index bloat
- Pages from merged source segments are now freed to PostgreSQL's FSM
- New allocations check FSM first, reusing freed pages when available
- Demote spill/merge notices to DEBUG1 to reduce build noise

## Results (internal benchmark, 2.1M slack messages)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Index Size | 831 MB | 473 MB | **43% smaller** |
| Pages Reused | 0 | 45,026 | ✓ |",
          "timestamp": "2025-12-17T02:09:26Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/36502f82bb9a840caebdb974afa425352d7d0956"
        },
        "date": 1765952506273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 257.613,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.182,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.233,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.448,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.207,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.354,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.04,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "b82dea59ef6d9c20c88742ce904acb4a94388246",
          "message": "Implement V2 segment format with block storage for BMW optimization

This implements Phase 1 of the block storage optimization plan:

V2 segment format changes:
- Block-based posting storage: 128 docs per block with TpBlockPosting (8 bytes)
- Skip index with TpSkipEntry (16 bytes) enabling BMW block skipping
- Fieldnorm table using Lucene SmallFloat encoding (1 byte per doc)
- CTID map for segment-local doc_id → heap tuple lookup
- TpDictEntryV2 (12 bytes) with skip_index_offset + block_count

New infrastructure:
- docmap.c/h: Document ID mapping with CTID hash table
- fieldnorm.h: Lucene SmallFloat encode/decode with precomputed table
- segment_query.c: V2 query iterator with block-based iteration

Key changes:
- All segment writers switched from V1 to V2 (index build, spill, merge)
- Merge completely rewritten to read V2 sources and write V2 output
- Dump function updated to display V2 format details
- Metapage version bumped to 5 (breaking change)

The V2 format reduces storage (posting: 14→8 bytes) and enables
future BMW optimization by providing block-level statistics for
early termination during top-k queries.

V1 code retained but unused - will be removed in future cleanup.",
          "timestamp": "2025-12-17T21:26:34Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/b82dea59ef6d9c20c88742ce904acb4a94388246"
        },
        "date": 1766008355045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 243.425,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.098,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.173,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.433,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.209,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.378,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.01,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "227818c762af2137ec92daf47c591c04b48fe196",
          "message": "Cache fieldnorm and CTID tables at segment open for faster iteration

V2 segment queries were slow because the iterator performed per-posting
I/O to look up CTIDs and fieldnorms. This change preloads both tables
into memory when opening a V2 segment reader.

Performance improvement on 50K document benchmark:
- Common term queries: 2.1-2.6x faster
- Buffer hits reduced by 23-34x (e.g., 30K → 900)

Memory overhead per segment reader:
- Fieldnorm: 1 byte per document
- CTID map: 6 bytes per document
- Total: ~7 bytes per document (e.g., 700KB for 100K docs)

The caching remains beneficial with BMW optimization since we still
need CTIDs for result output and fieldnorms for scoring on blocks
that aren't skipped.",
          "timestamp": "2025-12-17T22:23:28Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/227818c762af2137ec92daf47c591c04b48fe196"
        },
        "date": 1766011818087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 272.074,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.202,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.261,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.404,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.204,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.319,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.04,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "8a1344956d99e719a1d323e0754b1343625bf175",
          "message": "Limit V2 cache to segments with <=100K docs

The unconditional caching caused severe regression on large segments
(MS MARCO 8.8M docs was 5-7x slower) because:
- Loading 60MB of cache data upfront is expensive
- Top-k queries only access a small fraction of documents
- PostgreSQL's buffer cache efficiently handles sparse access patterns

With 100K threshold:
- Small segments (flush, early compaction): cached for fast iteration
- Large segments (late compaction): use per-posting reads via buffer cache",
          "timestamp": "2025-12-17T23:16:28Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/8a1344956d99e719a1d323e0754b1343625bf175"
        },
        "date": 1766014874771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 243.626,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.143,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.213,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.383,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.144,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.325,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.02,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "aa2ed0705d742a148e5d62226bc20dcabdc9eca2",
          "message": "Store fieldnorm inline in TpBlockPosting for V2 segments

Eliminates per-posting fieldnorm lookups during query execution by
storing the encoded fieldnorm directly in each TpBlockPosting entry.
This uses existing padding bytes, so there's zero storage overhead.

Changes:
- TpBlockPosting: uint8 fieldnorm replaces part of reserved padding
- V2 segment writer: populates fieldnorm from docmap during write
- V2 segment reader: reads fieldnorm directly from posting
- Segment merge: reads/writes inline fieldnorm during merge
- Removed cached_fieldnorms from TpSegmentReader (no longer needed)

The separate fieldnorm table is still written for backward compatibility
and potential future use with compressed formats.",
          "timestamp": "2025-12-18T00:34:51Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/aa2ed0705d742a148e5d62226bc20dcabdc9eca2"
        },
        "date": 1766023468613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 244.274,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.077,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.165,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.42,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.186,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.366,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.03,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766039068812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 246.414,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 4.178,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.204,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.415,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.196,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.351,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.11,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "1080101c3bf0a2e34ccd3c7b457da118e8253885",
          "message": "Change docmap lookup failure from WARNING to ERROR

A missing CTID in the docmap indicates a data integrity bug that should
not be silently handled. Fail fast with a clear error message instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-18T15:12:49Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1080101c3bf0a2e34ccd3c7b457da118e8253885"
        },
        "date": 1766072522491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 247.89,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.122,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.321,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.44,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.212,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.337,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.14,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766125236072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 217.369,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.804,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.779,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.08,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.843,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.093,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.72,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "c39a2afa819a5b978710d67971ff2af798a2453e",
          "message": "Clarify tp_docmap_create is constructor",
          "timestamp": "2025-12-19T21:10:41Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/c39a2afa819a5b978710d67971ff2af798a2453e"
        },
        "date": 1766180584757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 249.289,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.192,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.236,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.604,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.181,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.371,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "e24ccf3f0de3086bbff751979cbc7938179e0aa8",
          "message": "Optimize merge: replace hash lookups with direct mapping arrays

During segment merge, each posting required a hash lookup to convert
CTID → new_doc_id. This showed up as ~10% of CPU time in profiling.

Replace with O(1) array lookups by building per-source mapping arrays
(old_doc_id → new_doc_id) during docmap construction. Also eliminate
unnecessary fieldnorm decode/re-encode by passing through the raw byte.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-19T22:31:35Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/e24ccf3f0de3086bbff751979cbc7938179e0aa8"
        },
        "date": 1766184768501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 252.795,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.113,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.166,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.426,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.14,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.312,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.07,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "bb55c7b0b7a448d93bad0b518b62f3701e798036",
          "message": "Add v0.4.0 for compression",
          "timestamp": "2025-12-20T01:24:57Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/bb55c7b0b7a448d93bad0b518b62f3701e798036"
        },
        "date": 1766194065015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 243.389,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.089,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.23,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.414,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.183,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 3.164,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.01,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766211667860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 270.91,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.139,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.2,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.4,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.149,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.335,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.98,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "4a3fe86f16b7ba2ec78317f38debaa376b7e70a1",
          "message": "Switch V2 segment format to streaming layout

Change format from [dict] -> [skip index] -> [postings] to
[dict] -> [postings] -> [skip index]. This enables single-pass
streaming writes instead of 9 passes during segment creation.

The new format writes postings immediately after dict entries,
accumulating skip index entries in memory, then writes the skip
index at the end. Dict entries are updated with correct offsets
after all postings are written.

This addresses ~30% performance regression seen in segment merge
benchmarks by eliminating multiple passes over the data.",
          "timestamp": "2025-12-21T02:14:15Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/4a3fe86f16b7ba2ec78317f38debaa376b7e70a1"
        },
        "date": 1766283734578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 227.461,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.779,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.771,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.077,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.849,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.102,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.72,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766289617826,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 240.673,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.073,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.194,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.393,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.169,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.326,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.08,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766293711575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 246.529,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.149,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.275,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.441,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.213,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.35,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.09,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766293764370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 244.88,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.127,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.247,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.492,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.229,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.373,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.3,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766298086305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 246.473,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.522,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 7.043,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.385,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.162,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.347,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "3380f6ffe36eb525bff41498fddc06ac15e7b90b",
          "message": "Tune segment configuration for better benchmarking

- Default memtable spill threshold now 32M posting entries (~1M docs/segment)
- Benchmark workflow uses segments_per_level=16 for fewer merges
- Add segment statistics collection to MS MARCO and Wikipedia benchmarks",
          "timestamp": "2025-12-22T02:20:23Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/3380f6ffe36eb525bff41498fddc06ac15e7b90b"
        },
        "date": 1766370351875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 261.713,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.355,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.56,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.745,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.448,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.542,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.41,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "3380f6ffe36eb525bff41498fddc06ac15e7b90b",
          "message": "Tune segment configuration for better benchmarking

- Default memtable spill threshold now 32M posting entries (~1M docs/segment)
- Benchmark workflow uses segments_per_level=16 for fewer merges
- Add segment statistics collection to MS MARCO and Wikipedia benchmarks",
          "timestamp": "2025-12-22T02:20:23Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/3380f6ffe36eb525bff41498fddc06ac15e7b90b"
        },
        "date": 1766371107529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 247.739,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.219,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.23,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.463,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.256,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.393,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.08,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766384445277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 219.967,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 5.096,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.807,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.105,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.863,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.099,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.69,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15b8df351172d0321c2ca4035afcf211b4861f96",
          "message": "Implement V2 segment format with block storage for BMW optimization (#81)

## Summary
- Implements Phase 1 of block storage optimization with V2 segment
format
- Block-based posting storage (128 docs/block) with skip index for
future BMW optimization
- Fieldnorm table using Lucene SmallFloat encoding (1 byte per doc)
- Segment-local document IDs with CTID map for heap tuple lookup
- All segment writes switched to V2 format (breaking change, metapage
version 5)

## Compatibility
- **Read**: Supports both V1 and V2 segments (query code branches on
`header->version`)
- **Write**: V2 only - all new segments use V2 format
- **Upgrade path**: Existing indexes must be rebuilt (standard for
pre-1.0 releases)

## Key Changes
- **New files**: `docmap.c/h` (CTID mapping), `fieldnorm.h` (length
quantization)
- **segment_merge.c**: Complete rewrite to read V2 sources and write V2
output
- **segment_query.c**: V2 query iterator with block-based iteration
- **segment.c**: V2 writer and dump function updates

## Format Details
- `TpBlockPosting` (8 bytes): doc_id + frequency (down from 14-byte
TpSegmentPosting)
- `TpSkipEntry` (16 bytes): per-block statistics for BMW block skipping
- `TpDictEntryV2` (12 bytes): skip_index_offset + block_count + doc_freq

## Configuration Changes
- **Memtable spill threshold**: Bumped from 800K to 32M posting entries
(~1M docs/segment)
- **Benchmark config**: `segments_per_level = 16` for fewer merges
during benchmarking
- **Segment statistics**: Added `bm25_summarize_index()` calls to
benchmark load scripts

## Testing
- All 29 regression tests pass
- Merge, segment, and scoring tests validate V2 format correctness",
          "timestamp": "2025-12-22T08:47:53Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/15b8df351172d0321c2ca4035afcf211b4861f96"
        },
        "date": 1766431550165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 250.28,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.159,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.225,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.613,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.283,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.357,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.05,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766471005540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 215.789,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.766,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.762,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.084,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.868,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.1,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.6,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "8c86fccb2939836185fc141daf2fa762a09fb9fb",
          "message": "Implement top-k partial sort for BM25 result extraction

Replace qsort with a custom partial quicksort that only sorts the
top-k elements needed for results. This is O(n + k log k) instead
of O(n log n), providing significant speedup when k << n.

Key optimizations:
- Partial quicksort only recurses into partitions containing top-k
- Inlined score comparison eliminates function call overhead
- Insertion sort for small subarrays (< 16 elements)
- Median-of-three pivot selection for better partitioning

Performance improvement: ~40% faster for multi-term queries on
MS-MARCO (8.8M docs): 565ms -> 340ms for 5-term query.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T03:44:51Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/8c86fccb2939836185fc141daf2fa762a09fb9fb"
        },
        "date": 1766548623680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 249.99,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.298,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.567,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.604,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.33,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.552,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.2,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "2b9fe6f74c1bcc93bb69800729a8e1a207e7e60a",
          "message": "Add CTID tiebreaker for deterministic sort ordering

When documents have equal BM25 scores, sort by CTID ascending to ensure
deterministic, reproducible query results. This makes the partial
quicksort stable for equal-scored documents.

Update limits test expected output to reflect the new deterministic
ordering.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T04:02:12Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/2b9fe6f74c1bcc93bb69800729a8e1a207e7e60a"
        },
        "date": 1766549139194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 270.387,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.232,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.077,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.524,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.025,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.348,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.88,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "2e60e1e605ae9ff733796267fc162d62f3d07117",
          "message": "Add CTID tiebreaker for deterministic sort ordering

When documents have equal BM25 scores, sort by CTID ascending to ensure
deterministic, reproducible query results. This makes the partial
quicksort stable for equal-scored documents.

Update limits test expected output to reflect the new deterministic
ordering.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T04:02:12Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/2e60e1e605ae9ff733796267fc162d62f3d07117"
        },
        "date": 1766550388313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 248.478,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.995,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.997,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.23,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.996,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.31,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.88,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "a2d302bf43d00d0472adb696472575edcdb38318",
          "message": "Fix expected test output for deterministic CTID ordering",
          "timestamp": "2025-12-24T04:45:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/a2d302bf43d00d0472adb696472575edcdb38318"
        },
        "date": 1766552226222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 241.339,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.98,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.045,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.222,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.047,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.317,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.82,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766557307981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 245.684,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.137,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.309,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.496,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.249,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.37,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.08,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "014207fbe339343c2329b04fa32a7527c051a985",
          "message": "Fix hash function to use all 8 bytes of CTID key

The FNV-1a hash was only processing bytes 0-5 (bits 0-47), missing
the high 16 bits of block number (bits 48-63). For tables > 512MB,
this would cause hash collisions for CTIDs differing only in those
bits.

Also fixed incorrect comment claiming 24-byte entry size (it's 16).",
          "timestamp": "2025-12-24T07:33:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/014207fbe339343c2329b04fa32a7527c051a985"
        },
        "date": 1766632077290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 238.64,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.058,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.076,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.327,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.106,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.384,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.09,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766643732174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 262.517,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.088,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.22,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.429,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.146,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.349,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.12,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "53594e02f7d43fb420652bc403d6a440294f5ea0",
          "message": "Eliminate duplicate score computation with planner hook

Add a planner hook that replaces resjunk ORDER BY score expressions
with a cheap stub function that returns the cached score from the
index scan. This avoids computing BM25 scores twice (once in the
index scan, once in expression evaluation).

- Add tp_cached_score infrastructure in index.c
- Add bm25_get_current_score() stub function in query.c
- Add planner hook to detect BM25 IndexScan and replace expressions
- Only replace when BM25 IndexScan is present (safe for SeqScan fallback)

Also add fieldnorm_discrepancy test documenting score corruption
after L0->L1 merge (tracked in issue #93).",
          "timestamp": "2025-12-26T01:50:06Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53594e02f7d43fb420652bc403d6a440294f5ea0"
        },
        "date": 1766715023393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 234.821,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 1.611,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 2.175,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 1.781,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 1.619,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 1.226,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 2.03,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "979749163401fa76b29a83e8cb49953d5f1f2076",
          "message": "Revert custom hash table, use PostgreSQL dynahash

Revert commits 014207f and a422e57 that introduced a custom
linear-probing hash table. Profiling showed tp_doc_score_table_insert
taking ~50% of query time, and the custom FNV-1a hash was doing
8 multiplies per insert.

PostgreSQL's built-in dynahash is well-tested and optimized.
Stick with it unless we have compelling evidence it's a bottleneck.",
          "timestamp": "2025-12-26T02:51:16Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/979749163401fa76b29a83e8cb49953d5f1f2076"
        },
        "date": 1766722383028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 237.235,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 1.595,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 2.147,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 1.764,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 1.637,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 1.229,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 2.11,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766730114479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 250.188,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.17,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.245,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.486,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.184,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.37,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.04,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766816362230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 240.411,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 2.782,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 3.792,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.087,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 2.848,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.092,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 3.61,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766902888598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 244.911,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 3.118,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 4.323,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 3.58,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 3.244,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 2.349,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 4.03,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f",
          "message": "Update v1.0.0 target date to Feb 2026 (#97)

## Summary
- Updates the v1.0.0 release target from Feb 2025 to Feb 2026

Fixes #92",
          "timestamp": "2025-12-28T20:03:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f"
        },
        "date": 1766989159542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 211.696,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.092,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.139,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.145,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.119,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.038,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.21,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f",
          "message": "Update v1.0.0 target date to Feb 2026 (#97)

## Summary
- Updates the v1.0.0 release target from Feb 2025 to Feb 2026

Fixes #92",
          "timestamp": "2025-12-28T20:03:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f"
        },
        "date": 1767075643516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 260.826,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.118,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.176,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.177,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.143,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.052,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.23,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "a5ab4556207127508b8a9502b4a7afc71c389a04",
          "message": "Add competitive benchmarking infrastructure

Compare pg_textsearch against ParadeDB, Tantivy, and OpenSearch:

- benchmarks/engines/paradedb/ - pg_search extension benchmark
- benchmarks/engines/tantivy/ - tantivy-py Python benchmark
- benchmarks/engines/opensearch/ - Docker + opensearch-py benchmark
- benchmarks/compare_engines.sh - unified runner script
- benchmarks/compare_results.py - results aggregation
- .github/workflows/competitive-benchmark.yml - manual CI workflow

Results are stored as raw artifacts only (not published to gh-pages).
Workflow is marked as WIP/experimental.

🤖 Generated with [Claude Code](https://claude.ai/claude-code)",
          "timestamp": "2025-12-30T18:54:30Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/a5ab4556207127508b8a9502b4a7afc71c389a04"
        },
        "date": 1767121193418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 212.123,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.097,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.147,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.15,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.131,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.04,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.21,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "SteveLauC",
            "username": "SteveLauC",
            "email": "stevelauc@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6b3ffdb14b978bf175d1a7ce6891dfd7f3702b46",
          "message": "chore: fix make test and override pgxs installcheck (#91)

This commit:

1. Adds the missing `test` target. It is mentioned in `make help` but
has not been defined, when I run it locally, I see this:
   ```sh
   $ make test
   make: Nothing to be done for `test'.
   ```
   
2. Makes the `installcheck` target override the one defined by pgxs.
Previously, we were not overriding it but appending new commands to it",
          "timestamp": "2025-12-31T03:21:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/6b3ffdb14b978bf175d1a7ce6891dfd7f3702b46"
        },
        "date": 1767162052545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 256.904,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.118,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.179,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.188,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.151,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.074,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.26,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767248408383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 236.033,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.122,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.294,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.179,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.258,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.052,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.24,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767248902782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 212.415,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.098,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.158,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.155,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.129,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.039,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.21,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767252813431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 257.865,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.197,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.193,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.186,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.158,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.062,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.36,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "64a0270c2e43f3cb4f14af116f0229d5466e68a8",
          "message": "Move BMW scoring code to src/query/ directory

Refactor code organization:
- Move bmw.c, bmw.h from src/segment/ to src/query/
- Move score.c, score.h from src/types/ to src/query/
- Update include paths across codebase
- Add comprehensive BMW test suite (test/sql/bmw.sql)

The query/ directory is a more appropriate location for query-time
optimization code (BMW, scoring) rather than segment/ which is for
storage format.",
          "timestamp": "2026-01-01T21:52:49Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/64a0270c2e43f3cb4f14af116f0229d5466e68a8"
        },
        "date": 1767305350612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 212.537,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.095,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.154,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.156,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.129,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.042,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.23,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "87a0ce31e0f205366221c748f0264ebad27e365a",
          "message": "Fix BMW block iteration bug that defeated block skipping

The posting iterator's tp_segment_posting_iterator_next() auto-advances
to subsequent blocks when the current block is exhausted. This caused
BMW to process ALL blocks once the first non-skipped block was entered,
defeating the entire block-skipping optimization.

Fix by:
1. Resetting iter.finished before each block so subsequent blocks can be
   processed
2. Breaking out of the inner while loop when the iterator advances past
   the current block, allowing the outer for loop to apply threshold
   checks to decide whether to process subsequent blocks

This restores BMW's ability to skip blocks whose block_max_score is
below the current top-k threshold.

🤖 Generated with [Claude Code](https://claude.com/claude-code)",
          "timestamp": "2026-01-02T00:04:35Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/87a0ce31e0f205366221c748f0264ebad27e365a"
        },
        "date": 1767313334776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 253.65,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.119,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.282,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.307,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.266,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.092,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.27,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "ee33ee13b77400241319f71a81891cf752c811f4",
          "message": "Batch doc_freq lookups for multi-term queries

For multi-term queries, the previous implementation called
tp_get_unified_doc_freq() in a loop, which opened/closed each segment
once per term. With 5 terms and 6 segments, that's 30 segment
open/close cycles per query.

Add tp_batch_get_segment_doc_freq() which opens each segment once and
looks up all terms, reducing segment opens from O(terms * segments)
to O(segments).

This addresses the ~32% time spent in tp_segment_get_doc_freq seen in
profiling.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-02T01:03:00Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/ee33ee13b77400241319f71a81891cf752c811f4"
        },
        "date": 1767316849424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 246.507,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.125,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.171,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.189,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.16,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.07,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.26,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6f7ca4187793b0125da09133534d2533118b0b54",
          "message": "Bump version to 0.3.0-dev (#101)

## Summary

- Bump version to 0.3.0-dev for development
- Remove obsolete `pg_textsearch--0.1.0.sql` (fresh installs use
0.3.0-dev; upgrades use migration scripts)

## Testing

All regression tests pass.",
          "timestamp": "2026-01-01T08:24:00Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/6f7ca4187793b0125da09133534d2533118b0b54"
        },
        "date": 1767334870739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 233.547,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.129,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.181,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.181,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.154,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.052,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.24,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "id": "53c50c25080df9321a06fe80065835f9d1487caa",
          "message": "Fix ParadeDB installation - use GitHub releases

The packagecloud repo doesn't have pg_search packages. Download
directly from GitHub releases instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-03T05:50:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53c50c25080df9321a06fe80065835f9d1487caa"
        },
        "date": 1767421256119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 237.91,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.124,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.175,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.175,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.15,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.05,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.24,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "id": "53c50c25080df9321a06fe80065835f9d1487caa",
          "message": "Fix ParadeDB installation - use GitHub releases

The packagecloud repo doesn't have pg_search packages. Download
directly from GitHub releases instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-03T05:50:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53c50c25080df9321a06fe80065835f9d1487caa"
        },
        "date": 1767507629387,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cranfield (1.3K docs) - Index Build Time",
            "value": 259.02,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Short Query (1 word)",
            "value": 0.123,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Medium Query (3 words)",
            "value": 0.182,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Long Query (question)",
            "value": 0.184,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Common Term Query",
            "value": 0.154,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Rare Term Query",
            "value": 0.051,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Avg Query Latency (20 queries)",
            "value": 0.24,
            "unit": "ms"
          },
          {
            "name": "cranfield (1.3K docs) - Index Size",
            "value": 0.02,
            "unit": "MB"
          }
        ]
      }
    ],
    "wikipedia Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c80221e1ec07cfcfb80ea12afe6ac77a2776d12f",
          "message": "Extract and publish metrics per-dataset when running all benchmarks (#75)

## Summary
- When running `dataset=all`, metrics are now extracted separately for
each dataset
- Each dataset (Cranfield, MS MARCO, Wikipedia) gets its own benchmark
chart
- Previously, only the first dataset's results were captured

## Changes
- `extract_metrics.sh` now accepts optional section parameter to extract
from log sections
- Workflow runs extract_metrics.sh once per dataset when running \"all\"
- Separate benchmark-action publish steps for each dataset

## Testing
Trigger a benchmark run with `dataset=all` to verify all three datasets
appear separately in the results.",
          "timestamp": "2025-12-16T17:18:32Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/c80221e1ec07cfcfb80ea12afe6ac77a2776d12f"
        },
        "date": 1765916951504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia - Index Build Time",
            "value": 20422.556,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Short Query (1 word)",
            "value": 3.578,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Medium Query (3 words)",
            "value": 1.488,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Long Query (question)",
            "value": 1.316,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Common Term Query",
            "value": 2.971,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Rare Term Query",
            "value": 3.492,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b423ca362f278eedc868953d940a15a4ee6ea0e",
          "message": "Improve benchmark configuration and add index size tracking (#76)

## Summary

- Tune Postgres settings for ubuntu-latest runner (4 vCPUs, 16GB RAM):
  - `shared_buffers`: 1GB → 4GB (25% of RAM)
  - `effective_cache_size`: 2GB → 12GB (75% of RAM)
  - `maintenance_work_mem`: 256MB → 512MB
- Add more aggressive disk cleanup (swift, powershell, ghcup) to free
~10GB additional space
- Add index and table size reporting to all benchmark datasets with
standardized output
- Track index size over time in benchmark dashboard (displayed in MB)
- Show index/table sizes in GitHub job summary

## Testing

- [ ] Manually trigger benchmark workflow to verify new metrics are
captured",
          "timestamp": "2025-12-16T22:14:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1b423ca362f278eedc868953d940a15a4ee6ea0e"
        },
        "date": 1765924501902,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia - Index Build Time",
            "value": 19767.231,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Short Query (1 word)",
            "value": 3.613,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Medium Query (3 words)",
            "value": 1.479,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Long Query (question)",
            "value": 1.397,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Common Term Query",
            "value": 2.738,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Rare Term Query",
            "value": 3.494,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Index Size",
            "value": 158.62,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b423ca362f278eedc868953d940a15a4ee6ea0e",
          "message": "Improve benchmark configuration and add index size tracking (#76)

## Summary

- Tune Postgres settings for ubuntu-latest runner (4 vCPUs, 16GB RAM):
  - `shared_buffers`: 1GB → 4GB (25% of RAM)
  - `effective_cache_size`: 2GB → 12GB (75% of RAM)
  - `maintenance_work_mem`: 256MB → 512MB
- Add more aggressive disk cleanup (swift, powershell, ghcup) to free
~10GB additional space
- Add index and table size reporting to all benchmark datasets with
standardized output
- Track index size over time in benchmark dashboard (displayed in MB)
- Show index/table sizes in GitHub job summary

## Testing

- [ ] Manually trigger benchmark workflow to verify new metrics are
captured",
          "timestamp": "2025-12-16T22:14:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1b423ca362f278eedc868953d940a15a4ee6ea0e"
        },
        "date": 1765926063229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia - Index Build Time",
            "value": 19545.088,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Short Query (1 word)",
            "value": 3.623,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Medium Query (3 words)",
            "value": 1.259,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Long Query (question)",
            "value": 1.152,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Common Term Query",
            "value": 2.822,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Rare Term Query",
            "value": 3.512,
            "unit": "ms"
          },
          {
            "name": "wikipedia - Index Size",
            "value": 158.62,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "09e726021418ac873b9d6878f9ddd6dae68230ae",
          "message": "Improve benchmark dashboard: dataset sizes and compact layout (#77)

## Summary

- Include document count in benchmark metric names (e.g., \"msmarco (8.8M
docs) - Index Build Time\")
- Create 3-column responsive grid layout for benchmark dashboard
(responsive down to 1 column on mobile)
- Auto-deploy updated index.html to gh-pages after benchmarks run

## Changes

**format_for_action.sh**: Format document counts (1.4K, 8.8M, etc.) and
include in metric names

**benchmarks/gh-pages/index.html**: New compact layout with:
- 3-column grid (responsive)
- Smaller chart sizes
- Cleaner styling
- Dataset sections with headers

**benchmark.yml**: Add step to deploy updated index.html to gh-pages",
          "timestamp": "2025-12-16T23:30:56Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/09e726021418ac873b9d6878f9ddd6dae68230ae"
        },
        "date": 1765929000531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19905.079,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.609,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.226,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.201,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.769,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.561,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 158.62,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "36502f82bb9a840caebdb974afa425352d7d0956",
          "message": "Reclaim pages after segment compaction (#78)

## Summary
- Add page reclamation during segment compaction to prevent index bloat
- Pages from merged source segments are now freed to PostgreSQL's FSM
- New allocations check FSM first, reusing freed pages when available
- Demote spill/merge notices to DEBUG1 to reduce build noise

## Results (internal benchmark, 2.1M slack messages)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Index Size | 831 MB | 473 MB | **43% smaller** |
| Pages Reused | 0 | 45,026 | ✓ |",
          "timestamp": "2025-12-17T02:09:26Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/36502f82bb9a840caebdb974afa425352d7d0956"
        },
        "date": 1765952508967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 20062.195,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.589,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.261,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.127,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.754,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.58,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "b82dea59ef6d9c20c88742ce904acb4a94388246",
          "message": "Implement V2 segment format with block storage for BMW optimization

This implements Phase 1 of the block storage optimization plan:

V2 segment format changes:
- Block-based posting storage: 128 docs per block with TpBlockPosting (8 bytes)
- Skip index with TpSkipEntry (16 bytes) enabling BMW block skipping
- Fieldnorm table using Lucene SmallFloat encoding (1 byte per doc)
- CTID map for segment-local doc_id → heap tuple lookup
- TpDictEntryV2 (12 bytes) with skip_index_offset + block_count

New infrastructure:
- docmap.c/h: Document ID mapping with CTID hash table
- fieldnorm.h: Lucene SmallFloat encode/decode with precomputed table
- segment_query.c: V2 query iterator with block-based iteration

Key changes:
- All segment writers switched from V1 to V2 (index build, spill, merge)
- Merge completely rewritten to read V2 sources and write V2 output
- Dump function updated to display V2 format details
- Metapage version bumped to 5 (breaking change)

The V2 format reduces storage (posting: 14→8 bytes) and enables
future BMW optimization by providing block-level statistics for
early termination during top-k queries.

V1 code retained but unused - will be removed in future cleanup.",
          "timestamp": "2025-12-17T21:26:34Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/b82dea59ef6d9c20c88742ce904acb4a94388246"
        },
        "date": 1766008362156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 24273.554,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 6.475,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 28.081,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 36.746,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 14.583,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 18.87,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "227818c762af2137ec92daf47c591c04b48fe196",
          "message": "Cache fieldnorm and CTID tables at segment open for faster iteration

V2 segment queries were slow because the iterator performed per-posting
I/O to look up CTIDs and fieldnorms. This change preloads both tables
into memory when opening a V2 segment reader.

Performance improvement on 50K document benchmark:
- Common term queries: 2.1-2.6x faster
- Buffer hits reduced by 23-34x (e.g., 30K → 900)

Memory overhead per segment reader:
- Fieldnorm: 1 byte per document
- CTID map: 6 bytes per document
- Total: ~7 bytes per document (e.g., 700KB for 100K docs)

The caching remains beneficial with BMW optimization since we still
need CTIDs for result output and fieldnorms for scoring on blocks
that aren't skipped.",
          "timestamp": "2025-12-17T22:23:28Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/227818c762af2137ec92daf47c591c04b48fe196"
        },
        "date": 1766011823453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 24856.113,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 7.064,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 27.791,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 37.277,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 15.752,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 18.051,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "8a1344956d99e719a1d323e0754b1343625bf175",
          "message": "Limit V2 cache to segments with <=100K docs

The unconditional caching caused severe regression on large segments
(MS MARCO 8.8M docs was 5-7x slower) because:
- Loading 60MB of cache data upfront is expensive
- Top-k queries only access a small fraction of documents
- PostgreSQL's buffer cache efficiently handles sparse access patterns

With 100K threshold:
- Small segments (flush, early compaction): cached for fast iteration
- Large segments (late compaction): use per-posting reads via buffer cache",
          "timestamp": "2025-12-17T23:16:28Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/8a1344956d99e719a1d323e0754b1343625bf175"
        },
        "date": 1766014877595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 23576.432,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 6.811,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 27.733,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 37.028,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 14.664,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 17.762,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "aa2ed0705d742a148e5d62226bc20dcabdc9eca2",
          "message": "Store fieldnorm inline in TpBlockPosting for V2 segments

Eliminates per-posting fieldnorm lookups during query execution by
storing the encoded fieldnorm directly in each TpBlockPosting entry.
This uses existing padding bytes, so there's zero storage overhead.

Changes:
- TpBlockPosting: uint8 fieldnorm replaces part of reserved padding
- V2 segment writer: populates fieldnorm from docmap during write
- V2 segment reader: reads fieldnorm directly from posting
- Segment merge: reads/writes inline fieldnorm during merge
- Removed cached_fieldnorms from TpSegmentReader (no longer needed)

The separate fieldnorm table is still written for backward compatibility
and potential future use with compressed formats.",
          "timestamp": "2025-12-18T00:34:51Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/aa2ed0705d742a148e5d62226bc20dcabdc9eca2"
        },
        "date": 1766023470781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 23125.674,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 6.806,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 27.939,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 36.856,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 14.653,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 18.11,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766039073067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21196.929,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.636,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.511,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.336,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.054,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.834,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "1080101c3bf0a2e34ccd3c7b457da118e8253885",
          "message": "Change docmap lookup failure from WARNING to ERROR

A missing CTID in the docmap indicates a data integrity bug that should
not be silently handled. Fail fast with a clear error message instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-18T15:12:49Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/1080101c3bf0a2e34ccd3c7b457da118e8253885"
        },
        "date": 1766072562986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 22869.536,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 7.322,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 25.979,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 37.28,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 14.89,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 18.405,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766125240477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18735.398,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.26,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.223,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.04,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.536,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.365,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "c39a2afa819a5b978710d67971ff2af798a2453e",
          "message": "Clarify tp_docmap_create is constructor",
          "timestamp": "2025-12-19T21:10:41Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/c39a2afa819a5b978710d67971ff2af798a2453e"
        },
        "date": 1766180587512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21972.373,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.947,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.495,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.242,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.928,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.626,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "e24ccf3f0de3086bbff751979cbc7938179e0aa8",
          "message": "Optimize merge: replace hash lookups with direct mapping arrays

During segment merge, each posting required a hash lookup to convert
CTID → new_doc_id. This showed up as ~10% of CPU time in profiling.

Replace with O(1) array lookups by building per-source mapping arrays
(old_doc_id → new_doc_id) during docmap construction. Also eliminate
unnecessary fieldnorm decode/re-encode by passing through the raw byte.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-19T22:31:35Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/e24ccf3f0de3086bbff751979cbc7938179e0aa8"
        },
        "date": 1766184771352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21366.845,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 4.813,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.842,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.776,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.975,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.824,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "bb55c7b0b7a448d93bad0b518b62f3701e798036",
          "message": "Add v0.4.0 for compression",
          "timestamp": "2025-12-20T01:24:57Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/bb55c7b0b7a448d93bad0b518b62f3701e798036"
        },
        "date": 1766194067466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21971.213,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.941,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.368,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.306,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.933,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.693,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.35,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766211671192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 20010.245,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.541,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.536,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.317,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.983,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.588,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.1,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766289621506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21147.287,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 1.55,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.322,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.641,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.444,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.602,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.36,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766293715844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21955.13,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 1.55,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.264,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.681,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.432,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.625,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.36,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "be9e9979fb6f0287d7876e902d565648bc07f655",
          "message": "Fix dict entry page boundary overflow in V2 segment format

The V2 segment format's dict entry update code was writing 12-byte
TpDictEntryV2 entries without handling the case where an entry spans
two pages. When page_offset > 8156 (SEGMENT_DATA_PER_PAGE - sizeof),
the write would overflow into the next page's header, corrupting the
LSN field and causing 'xlog flush request not satisfied' errors.

Fixed by detecting when an entry would cross a page boundary and
splitting the write across two pages. Applied to both tp_write_segment_v2()
and the merge segment creation code.",
          "timestamp": "2025-12-21T03:40:14Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/be9e9979fb6f0287d7876e902d565648bc07f655"
        },
        "date": 1766293768660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 21565.741,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 1.468,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.032,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.629,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.398,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.765,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 144.36,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766298091686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 20202.836,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 1.131,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.273,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.556,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 3.186,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.472,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.11,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "3380f6ffe36eb525bff41498fddc06ac15e7b90b",
          "message": "Tune segment configuration for better benchmarking

- Default memtable spill threshold now 32M posting entries (~1M docs/segment)
- Benchmark workflow uses segments_per_level=16 for fewer merges
- Add segment statistics collection to MS MARCO and Wikipedia benchmarks",
          "timestamp": "2025-12-22T02:20:23Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/3380f6ffe36eb525bff41498fddc06ac15e7b90b"
        },
        "date": 1766370357068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19341.669,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.717,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.585,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.263,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.664,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.089,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "3380f6ffe36eb525bff41498fddc06ac15e7b90b",
          "message": "Tune segment configuration for better benchmarking

- Default memtable spill threshold now 32M posting entries (~1M docs/segment)
- Benchmark workflow uses segments_per_level=16 for fewer merges
- Add segment statistics collection to MS MARCO and Wikipedia benchmarks",
          "timestamp": "2025-12-22T02:20:23Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/3380f6ffe36eb525bff41498fddc06ac15e7b90b"
        },
        "date": 1766371112296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19538.585,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.804,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.515,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.51,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.693,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.22,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ca3751e0f0a001e6ffb6c729890aabfd1152ae9",
          "message": "Add storage and query optimization roadmap (#79)

## Summary

- Adds design doc (`OPTIMIZATION_ROADMAP.md`) covering planned
optimizations:
- Block-Max WAND algorithm for O(k log n) top-k queries (vs current
O(n))
  - Block-aligned posting storage with skip lists
  - FOR/PFOR compression targeting 50%+ space reduction
  - Fieldnorm quantization using Lucene's SmallFloat scheme
  - Phased implementation plan (v0.0.4 through v0.0.7)

- Updates README to clarify \"not yet recommended\" production status

The roadmap draws from analysis of Tantivy and Lucene implementations,
prioritizing asymptotic gains (BMW) over constant-factor gains
(compression).",
          "timestamp": "2025-12-17T20:06:29Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/0ca3751e0f0a001e6ffb6c729890aabfd1152ae9"
        },
        "date": 1766384450317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18401.065,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 1.107,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.703,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.581,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 2.976,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 3.476,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 153.11,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15b8df351172d0321c2ca4035afcf211b4861f96",
          "message": "Implement V2 segment format with block storage for BMW optimization (#81)

## Summary
- Implements Phase 1 of block storage optimization with V2 segment
format
- Block-based posting storage (128 docs/block) with skip index for
future BMW optimization
- Fieldnorm table using Lucene SmallFloat encoding (1 byte per doc)
- Segment-local document IDs with CTID map for heap tuple lookup
- All segment writes switched to V2 format (breaking change, metapage
version 5)

## Compatibility
- **Read**: Supports both V1 and V2 segments (query code branches on
`header->version`)
- **Write**: V2 only - all new segments use V2 format
- **Upgrade path**: Existing indexes must be rebuilt (standard for
pre-1.0 releases)

## Key Changes
- **New files**: `docmap.c/h` (CTID mapping), `fieldnorm.h` (length
quantization)
- **segment_merge.c**: Complete rewrite to read V2 sources and write V2
output
- **segment_query.c**: V2 query iterator with block-based iteration
- **segment.c**: V2 writer and dump function updates

## Format Details
- `TpBlockPosting` (8 bytes): doc_id + frequency (down from 14-byte
TpSegmentPosting)
- `TpSkipEntry` (16 bytes): per-block statistics for BMW block skipping
- `TpDictEntryV2` (12 bytes): skip_index_offset + block_count + doc_freq

## Configuration Changes
- **Memtable spill threshold**: Bumped from 800K to 32M posting entries
(~1M docs/segment)
- **Benchmark config**: `segments_per_level = 16` for fewer merges
during benchmarking
- **Segment statistics**: Added `bm25_summarize_index()` calls to
benchmark load scripts

## Testing
- All 29 regression tests pass
- Merge, segment, and scoring tests validate V2 format correctness",
          "timestamp": "2025-12-22T08:47:53Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/15b8df351172d0321c2ca4035afcf211b4861f96"
        },
        "date": 1766431553219,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 20197.543,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.784,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.695,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.397,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.612,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.281,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766471008574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 17930,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.561,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.031,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.042,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.903,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 8.116,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "8c86fccb2939836185fc141daf2fa762a09fb9fb",
          "message": "Implement top-k partial sort for BM25 result extraction

Replace qsort with a custom partial quicksort that only sorts the
top-k elements needed for results. This is O(n + k log k) instead
of O(n log n), providing significant speedup when k << n.

Key optimizations:
- Partial quicksort only recurses into partitions containing top-k
- Inlined score comparison eliminates function call overhead
- Insertion sort for small subarrays (< 16 elements)
- Median-of-three pivot selection for better partitioning

Performance improvement: ~40% faster for multi-term queries on
MS-MARCO (8.8M docs): 565ms -> 340ms for 5-term query.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T03:44:51Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/8c86fccb2939836185fc141daf2fa762a09fb9fb"
        },
        "date": 1766548628747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18575.546,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.815,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.127,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.15,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.517,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 7.817,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.49,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "2b9fe6f74c1bcc93bb69800729a8e1a207e7e60a",
          "message": "Add CTID tiebreaker for deterministic sort ordering

When documents have equal BM25 scores, sort by CTID ascending to ensure
deterministic, reproducible query results. This makes the partial
quicksort stable for equal-scored documents.

Update limits test expected output to reflect the new deterministic
ordering.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T04:02:12Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/2b9fe6f74c1bcc93bb69800729a8e1a207e7e60a"
        },
        "date": 1766549141859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19805.027,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.822,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.703,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.863,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.156,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.664,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.436,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "2e60e1e605ae9ff733796267fc162d62f3d07117",
          "message": "Add CTID tiebreaker for deterministic sort ordering

When documents have equal BM25 scores, sort by CTID ascending to ensure
deterministic, reproducible query results. This makes the partial
quicksort stable for equal-scored documents.

Update limits test expected output to reflect the new deterministic
ordering.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-24T04:02:12Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/2e60e1e605ae9ff733796267fc162d62f3d07117"
        },
        "date": 1766550390871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18697.987,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.54,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.287,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.829,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.661,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.403,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.566,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "a2d302bf43d00d0472adb696472575edcdb38318",
          "message": "Fix expected test output for deterministic CTID ordering",
          "timestamp": "2025-12-24T04:45:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/a2d302bf43d00d0472adb696472575edcdb38318"
        },
        "date": 1766552229236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18399.145,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.53,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.164,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.982,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.171,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.421,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.467,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766557312963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19995.887,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.785,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.587,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.222,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.305,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.156,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "014207fbe339343c2329b04fa32a7527c051a985",
          "message": "Fix hash function to use all 8 bytes of CTID key

The FNV-1a hash was only processing bytes 0-5 (bits 0-47), missing
the high 16 bits of block number (bits 48-63). For tables > 512MB,
this would cause hash collisions for CTIDs differing only in those
bits.

Also fixed incorrect comment claiming 24-byte entry size (it's 16).",
          "timestamp": "2025-12-24T07:33:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/014207fbe339343c2329b04fa32a7527c051a985"
        },
        "date": 1766632082190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19269.883,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.595,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.056,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.899,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.082,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.459,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.362,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766643737351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 20053.665,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.803,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.534,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.43,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.584,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.784,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "53594e02f7d43fb420652bc403d6a440294f5ea0",
          "message": "Eliminate duplicate score computation with planner hook

Add a planner hook that replaces resjunk ORDER BY score expressions
with a cheap stub function that returns the cached score from the
index scan. This avoids computing BM25 scores twice (once in the
index scan, once in expression evaluation).

- Add tp_cached_score infrastructure in index.c
- Add bm25_get_current_score() stub function in query.c
- Add planner hook to detect BM25 IndexScan and replace expressions
- Only replace when BM25 IndexScan is present (safe for SeqScan fallback)

Also add fieldnorm_discrepancy test documenting score corruption
after L0->L1 merge (tracked in issue #93).",
          "timestamp": "2025-12-26T01:50:06Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53594e02f7d43fb420652bc403d6a440294f5ea0"
        },
        "date": 1766715026335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18841.418,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.561,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.016,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.756,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.89,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.317,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.278,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "979749163401fa76b29a83e8cb49953d5f1f2076",
          "message": "Revert custom hash table, use PostgreSQL dynahash

Revert commits 014207f and a422e57 that introduced a custom
linear-probing hash table. Profiling showed tp_doc_score_table_insert
taking ~50% of query time, and the custom FNV-1a hash was doing
8 multiplies per insert.

PostgreSQL's built-in dynahash is well-tested and optimized.
Stick with it unless we have compelling evidence it's a bottleneck.",
          "timestamp": "2025-12-26T02:51:16Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/979749163401fa76b29a83e8cb49953d5f1f2076"
        },
        "date": 1766722387521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19071.963,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.649,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.136,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.892,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.904,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.207,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query (with score)",
            "value": 2.407,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766730117799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19616.069,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.839,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.564,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.463,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.623,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.498,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766816367570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18042.111,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.658,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.068,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.071,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.976,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 8.257,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20313076f2f43cab3f1a36be0f2805fea22bcf83",
          "message": "Style benchmark graph points by branch type (#84)

## Summary
- Main branch benchmark runs shown as filled circles (●)
- Feature branch runs shown as X markers (✕) with white fill
- Tooltip displays branch name alongside commit and date info
- Added visual legend to dashboard header
- Workflow now tracks branch info in `branch_info.js` on gh-pages (keeps
last 500 entries)

## Testing
- Run benchmark workflow on main and a feature branch
- Verify points display with different styles on the dashboard
- Hover over points to confirm branch name appears in tooltip",
          "timestamp": "2025-12-22T19:49:33Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/20313076f2f43cab3f1a36be0f2805fea22bcf83"
        },
        "date": 1766902892082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19292.884,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.748,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 4.477,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.175,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.338,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 9.062,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f",
          "message": "Update v1.0.0 target date to Feb 2026 (#97)

## Summary
- Updates the v1.0.0 release target from Feb 2025 to Feb 2026

Fixes #92",
          "timestamp": "2025-12-28T20:03:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f"
        },
        "date": 1766989163110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 16981.923,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.577,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.022,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.849,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.48,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.764,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.261,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 3.868,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.054,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.545,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f",
          "message": "Update v1.0.0 target date to Feb 2026 (#97)

## Summary
- Updates the v1.0.0 release target from Feb 2025 to Feb 2026

Fixes #92",
          "timestamp": "2025-12-28T20:03:50Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/058dc902ac7802f7a6cd6a62c7d3aaf89a541b8f"
        },
        "date": 1767075646235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19163.457,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.791,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.639,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.405,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.207,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.735,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.688,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.284,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.473,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.054,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "a5ab4556207127508b8a9502b4a7afc71c389a04",
          "message": "Add competitive benchmarking infrastructure

Compare pg_textsearch against ParadeDB, Tantivy, and OpenSearch:

- benchmarks/engines/paradedb/ - pg_search extension benchmark
- benchmarks/engines/tantivy/ - tantivy-py Python benchmark
- benchmarks/engines/opensearch/ - Docker + opensearch-py benchmark
- benchmarks/compare_engines.sh - unified runner script
- benchmarks/compare_results.py - results aggregation
- .github/workflows/competitive-benchmark.yml - manual CI workflow

Results are stored as raw artifacts only (not published to gh-pages).
Workflow is marked as WIP/experimental.

🤖 Generated with [Claude Code](https://claude.ai/claude-code)",
          "timestamp": "2025-12-30T18:54:30Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/a5ab4556207127508b8a9502b4a7afc71c389a04"
        },
        "date": 1767121198240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 17728.923,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.562,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.281,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.228,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.829,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.87,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.211,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.399,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.336,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.839,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "SteveLauC",
            "username": "SteveLauC",
            "email": "stevelauc@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6b3ffdb14b978bf175d1a7ce6891dfd7f3702b46",
          "message": "chore: fix make test and override pgxs installcheck (#91)

This commit:

1. Adds the missing `test` target. It is mentioned in `make help` but
has not been defined, when I run it locally, I see this:
   ```sh
   $ make test
   make: Nothing to be done for `test'.
   ```
   
2. Makes the `installcheck` target override the one defined by pgxs.
Previously, we were not overriding it but appending new commands to it",
          "timestamp": "2025-12-31T03:21:54Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/6b3ffdb14b978bf175d1a7ce6891dfd7f3702b46"
        },
        "date": 1767162057409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18796.424,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.847,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.375,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.188,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.024,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.503,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.522,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.049,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.225,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.843,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767248413525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19550.225,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.84,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.555,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.03,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.148,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.676,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.526,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.047,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.278,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.109,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767248907668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 17825.362,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.797,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.074,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.235,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.742,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.36,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.567,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 3.943,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.032,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.895,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9392a467f82d3313679869fb686edb6b6d74639c",
          "message": "Release v0.2.0 (#100)

Happy New Year!

## Summary

- V2 segment format with block-based posting storage (128 docs/block)
- Unlimited indexes via dshash registry
- MS MARCO and Wikipedia benchmark suite
- Major code refactoring into am/, memtable/, segment/, types/, state/,
planner/, and debug/ directories

## Bug Fixes

- Fixed excessive memory allocation in document scoring
- Fixed buildempty() to write init fork correctly

## Testing

All 30 SQL regression tests pass, plus concurrency, recovery, and
segment tests.

After merge, tag with: `git tag -a v0.2.0 <merge-commit> -m \"Release
v0.2.0 - Block storage foundation\"`",
          "timestamp": "2026-01-01T02:31:40Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/9392a467f82d3313679869fb686edb6b6d74639c"
        },
        "date": 1767252818440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19329.045,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.763,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.719,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.339,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.1,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.478,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.993,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.065,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.349,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.95,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "64a0270c2e43f3cb4f14af116f0229d5466e68a8",
          "message": "Move BMW scoring code to src/query/ directory

Refactor code organization:
- Move bmw.c, bmw.h from src/segment/ to src/query/
- Move score.c, score.h from src/types/ to src/query/
- Update include paths across codebase
- Add comprehensive BMW test suite (test/sql/bmw.sql)

The query/ directory is a more appropriate location for query-time
optimization code (BMW, scoring) rather than segment/ which is for
storage format.",
          "timestamp": "2026-01-01T21:52:49Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/64a0270c2e43f3cb4f14af116f0229d5466e68a8"
        },
        "date": 1767305355836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 17194.986,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.409,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 1.889,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.561,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.672,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 4.55,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.197,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 3.867,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.09,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.702,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "87a0ce31e0f205366221c748f0264ebad27e365a",
          "message": "Fix BMW block iteration bug that defeated block skipping

The posting iterator's tp_segment_posting_iterator_next() auto-advances
to subsequent blocks when the current block is exhausted. This caused
BMW to process ALL blocks once the first non-skipped block was entered,
defeating the entire block-skipping optimization.

Fix by:
1. Resetting iter.finished before each block so subsequent blocks can be
   processed
2. Breaking out of the inner while loop when the iterator advances past
   the current block, allowing the outer for loop to apply threshold
   checks to decide whether to process subsequent blocks

This restores BMW's ability to skip blocks whose block_max_score is
below the current top-k threshold.

🤖 Generated with [Claude Code](https://claude.com/claude-code)",
          "timestamp": "2026-01-02T00:04:35Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/87a0ce31e0f205366221c748f0264ebad27e365a"
        },
        "date": 1767313338677,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18391.187,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.745,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.288,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 4.785,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 7.488,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 8.814,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 13.329,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 2.812,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 2.939,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.356,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.67,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "id": "ee33ee13b77400241319f71a81891cf752c811f4",
          "message": "Batch doc_freq lookups for multi-term queries

For multi-term queries, the previous implementation called
tp_get_unified_doc_freq() in a loop, which opened/closed each segment
once per term. With 5 terms and 6 segments, that's 30 segment
open/close cycles per query.

Add tp_batch_get_segment_doc_freq() which opens each segment once and
looks up all terms, reducing segment opens from O(terms * segments)
to O(segments).

This addresses the ~32% time spent in tp_segment_get_doc_freq seen in
profiling.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-02T01:03:00Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/ee33ee13b77400241319f71a81891cf752c811f4"
        },
        "date": 1767316852574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19104.656,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.924,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 2.13,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 5.01,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 7.747,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 12.592,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 13.782,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 2.994,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 2.748,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.184,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.75,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@timescale.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6f7ca4187793b0125da09133534d2533118b0b54",
          "message": "Bump version to 0.3.0-dev (#101)

## Summary

- Bump version to 0.3.0-dev for development
- Remove obsolete `pg_textsearch--0.1.0.sql` (fresh installs use
0.3.0-dev; upgrades use migration scripts)

## Testing

All regression tests pass.",
          "timestamp": "2026-01-01T08:24:00Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/6f7ca4187793b0125da09133534d2533118b0b54"
        },
        "date": 1767334874028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18378.489,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.671,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.357,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 1.972,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 4.882,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.423,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 5.542,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.142,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.527,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 3.877,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.75,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "id": "53c50c25080df9321a06fe80065835f9d1487caa",
          "message": "Fix ParadeDB installation - use GitHub releases

The packagecloud repo doesn't have pg_search packages. Download
directly from GitHub releases instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-03T05:50:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53c50c25080df9321a06fe80065835f9d1487caa"
        },
        "date": 1767421258859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 18958.958,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 3.011,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.678,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.249,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.214,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.632,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.771,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.368,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.526,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.072,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.75,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "committer": {
            "name": "Todd J. Green",
            "username": "tjgreen42",
            "email": "tj@tigerdata.com"
          },
          "id": "53c50c25080df9321a06fe80065835f9d1487caa",
          "message": "Fix ParadeDB installation - use GitHub releases

The packagecloud repo doesn't have pg_search packages. Download
directly from GitHub releases instead.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-03T05:50:20Z",
          "url": "https://github.com/timescale/pg_textsearch/commit/53c50c25080df9321a06fe80065835f9d1487caa"
        },
        "date": 1767507632574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wikipedia (99.9K docs) - Index Build Time",
            "value": 19254.458,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query (1 word)",
            "value": 2.764,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query (3 words)",
            "value": 3.623,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query (question)",
            "value": 2.161,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Common Term Query",
            "value": 5.139,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query",
            "value": 5.482,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Short Query with Score",
            "value": 3.699,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Medium Query with Score",
            "value": 4.312,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Long Query with Score",
            "value": 3.465,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Rare Term Query with Score",
            "value": 4.053,
            "unit": "ms"
          },
          {
            "name": "wikipedia (99.9K docs) - Index Size",
            "value": 66.75,
            "unit": "MB"
          }
        ]
      }
    ]
  }
};
