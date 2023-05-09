---
id: inputObjects
title: Input objects
slug: inputObjects
sidebar_position: 8
---

## AddAssetLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the asset to add liquidity.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of liquidity to add.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the transfer.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## AddPeerLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
peerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the peer to add liquidity.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of liquidity to add.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the transfer.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## AmountInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
value<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetCode<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p><a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency code</a>, e.g. <code>USD</code></p>
</td>
</tr>
<tr>
<td>
assetScale<br />
<a href="/docs/reference/scalars#uint8"><code>UInt8!</code></a>
</td>
<td>
<p>Difference in orders of magnitude between the standard unit of an asset and a corresponding fractional unit</p>
</td>
</tr>
</tbody>
</table>

## CreateAssetInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p><a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency code</a>, e.g. <code>USD</code></p>
</td>
</tr>
<tr>
<td>
scale<br />
<a href="/docs/reference/scalars#uint8"><code>UInt8!</code></a>
</td>
<td>
<p>Difference in orders of magnitude between the standard unit of an asset and a corresponding fractional unit</p>
</td>
</tr>
<tr>
<td>
withdrawalThreshold<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>
<p>Minimum amount of liquidity that can be withdrawn from the asset</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreateAssetLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the asset to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of withdrawal.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreateIncomingPaymentInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Id of the payment pointer under which the incoming payment will be created</p>
</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Expiration date-time</p>
</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Human readable description of the incoming payment.</p>
</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>
<p>Maximum amount to be received</p>
</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>A reference that can be used by external systems to reconcile this payment with their systems. E.g. an invoice number.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreateOutgoingPaymentInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Id of the payment pointer under which the outgoing payment will be created</p>
</td>
</tr>
<tr>
<td>
quoteId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Id of the corresponding quote for that outgoing payment</p>
</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Human readable description of the outgoing payment.</p>
</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>A reference that can be used by external systems to reconcile this payment with their systems. E.g. an invoice number.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Asset of the payment pointer</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment Pointer URL</p>
</td>
</tr>
<tr>
<td>
publicName<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Public name associated with the payment pointer</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerKeyInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
jwk<br />
<a href="/docs/reference/inputObjects#jwkinput"><code>JwkInput!</code></a>
</td>
<td>
<p>Public key</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the Open Payments payment pointer to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreatePeerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>
<p>Maximum packet amount that the peer accepts</p>
</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/inputObjects#httpinput"><code>HttpInput!</code></a>
</td>
<td>
<p>Peering connection details</p>
</td>
</tr>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Asset id of peering relationship</p>
</td>
</tr>
<tr>
<td>
staticIlpAddress<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Peer&#39;s ILP address</p>
</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Peer&#39;s internal name</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreatePeerLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
peerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the peer to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of withdrawal.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreateQuoteInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Id of the payment pointer under which the quote will be created</p>
</td>
</tr>
<tr>
<td>
sendAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>
<p>Amount to send (fixed send)</p>
</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>
<p>Amount to receive (fixed receive)</p>
</td>
</tr>
<tr>
<td>
receiver<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment pointer URL of the receiver</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## CreateReceiverInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerUrl<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Receiving payment pointer URL</p>
</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Expiration date-time</p>
</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Human readable description of the incoming payment.</p>
</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>
<p>Maximum amount to be received</p>
</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>A reference that can be used by external systems to reconcile this payment with their systems. E.g. an invoice number.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## DeletePeerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## DepositEventLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
eventId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the event to deposit into.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## HttpIncomingInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
authTokens<br />
<a href="/docs/reference/scalars#string"><code>[String!]!</code></a>
</td>
<td>
<p>Array of auth tokens accepted by this Rafiki instance</p>
</td>
</tr>
</tbody>
</table>

## HttpInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
incoming<br />
<a href="/docs/reference/inputObjects#httpincominginput"><code>HttpIncomingInput</code></a>
</td>
<td>
<p>Incoming connection details</p>
</td>
</tr>
<tr>
<td>
outgoing<br />
<a href="/docs/reference/inputObjects#httpoutgoinginput"><code>HttpOutgoingInput!</code></a>
</td>
<td>
<p>Outgoing connection details</p>
</td>
</tr>
</tbody>
</table>

## HttpOutgoingInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
authToken<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Auth token to present at the peering Rafiki instance</p>
</td>
</tr>
<tr>
<td>
endpoint<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Peer&#39;s connection endpoint</p>
</td>
</tr>
</tbody>
</table>

## JwkInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
kid<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Key id</p>
</td>
</tr>
<tr>
<td>
x<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Base64 url-encoded public key.</p>
</td>
</tr>
<tr>
<td>
alg<br />
<a href="/docs/reference/enums#alg"><code>Alg!</code></a>
</td>
<td>
<p>Cryptographic algorithm family used with the key. The only allowed value is <code>EdDSA</code>.</p>
</td>
</tr>
<tr>
<td>
kty<br />
<a href="/docs/reference/enums#kty"><code>Kty!</code></a>
</td>
<td>
<p>Key type. The only allowed value is <code>OKP</code>.</p>
</td>
</tr>
<tr>
<td>
crv<br />
<a href="/docs/reference/enums#crv"><code>Crv!</code></a>
</td>
<td>
<p>Curve that the key pair is derived from. The only allowed value is <code>Ed25519</code>.</p>
</td>
</tr>
</tbody>
</table>

## PostLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
withdrawalId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the liquidity withdrawal to post.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## RevokePaymentPointerKeyInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Internal id of key</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## TriggerPaymentPointerEventsInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
limit<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Maximum number of events being triggered (n).</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## UpdateAssetInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Asset id</p>
</td>
</tr>
<tr>
<td>
withdrawalThreshold<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>
<p>New minimum amount of liquidity that can be withdrawn from the asset</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## UpdatePeerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Peer id</p>
</td>
</tr>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>
<p>New maximum packet amount that the peer accepts</p>
</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/inputObjects#httpinput"><code>HttpInput</code></a>
</td>
<td>
<p>New peering connection details</p>
</td>
</tr>
<tr>
<td>
staticIlpAddress<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Peer&#39;s new ILP address</p>
</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Peer&#39;s new public name</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## VoidLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
withdrawalId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the liquidity withdrawal to void.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

## WithdrawEventLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
eventId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the event to withdraw from.</p>
</td>
</tr>
<tr>
<td>
idempotencyKey<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Unique key to ensure duplicate or retried requests are processed only once. See <a href="https://en.wikipedia.org/wiki/Idempotence">idempotence</a></p>
</td>
</tr>
</tbody>
</table>

