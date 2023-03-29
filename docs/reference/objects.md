---
id: objects
title: Objects
slug: objects
sidebar_position: 4
---

## Amount



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

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

## Asset



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Asset id</p>
</td>
</tr>
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
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## AssetEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetsConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#assetedge"><code>[AssetEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerKeyMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerKey<br />
<a href="/docs/reference/objects#paymentpointerkey"><code>PaymentPointerKey</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointer<br />
<a href="/docs/reference/objects#paymentpointer"><code>PaymentPointer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
peer<br />
<a href="/docs/reference/objects#peer"><code>Peer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateReceiverResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiver<br />
<a href="/docs/reference/objects#receiver"><code>Receiver</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## DeletePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Http



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
outgoing<br />
<a href="/docs/reference/objects#httpoutgoing"><code>HttpOutgoing!</code></a>
</td>
<td>
<p>Outgoing connection details</p>
</td>
</tr>
</tbody>
</table>

## HttpOutgoing



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

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

## IncomingPayment



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Incoming Payment id</p>
</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Id of the payment pointer under which this incoming payment was created</p>
</td>
</tr>
<tr>
<td>
state<br />
<a href="/docs/reference/enums#incomingpaymentstate"><code>IncomingPaymentState!</code></a>
</td>
<td>
<p>Incoming payment state</p>
</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of expiry. After this time, the incoming payment will not accept further payments made to it.</p>
</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount</code></a>
</td>
<td>
<p>The maximum amount that should be paid into the payment pointer under this incoming payment.</p>
</td>
</tr>
<tr>
<td>
receivedAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>The total amount that has been paid into the payment pointer under this incoming payment.</p>
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
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>A reference that can be used by external systems to reconcile this payment with their systems. E.g. an invoice number.</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## IncomingPaymentConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#incomingpaymentedge"><code>[IncomingPaymentEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#incomingpayment"><code>IncomingPayment!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
payment<br />
<a href="/docs/reference/objects#incomingpayment"><code>IncomingPayment</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Jwk



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

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

## LiquidityMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/enums#liquidityerror"><code>LiquidityError</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPayment



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Outgoing payment id</p>
</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Id of the payment pointer under which this outgoing payment was created</p>
</td>
</tr>
<tr>
<td>
state<br />
<a href="/docs/reference/enums#outgoingpaymentstate"><code>OutgoingPaymentState!</code></a>
</td>
<td>
<p>Outgoing payment state</p>
</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stateAttempts<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sendAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>Amount to send (fixed send)</p>
</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
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
quote<br />
<a href="/docs/reference/objects#quote"><code>Quote</code></a>
</td>
<td>
<p>Quote for this outgoing payment</p>
</td>
</tr>
<tr>
<td>
sentAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>Amount already sent</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## OutgoingPaymentConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#outgoingpaymentedge"><code>[OutgoingPaymentEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#outgoingpayment"><code>OutgoingPayment!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
payment<br />
<a href="/docs/reference/objects#outgoingpayment"><code>OutgoingPayment</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PageInfo



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
endCursor<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor to continue.</p>
</td>
</tr>
<tr>
<td>
hasNextPage<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Paginating forwards: Are there more pages?</p>
</td>
</tr>
<tr>
<td>
hasPreviousPage<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Paginating backwards: Are there more pages?</p>
</td>
</tr>
<tr>
<td>
startCursor<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor to continue.</p>
</td>
</tr>
</tbody>
</table>

## PaymentPointer



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Payment pointer id</p>
</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
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
incomingPayments<br />
<a href="/docs/reference/objects#incomingpaymentconnection"><code>IncomingPaymentConnection</code></a>
</td>
<td>
<p>List of incoming payments received by this payment pointer</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor before the the requested page.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor after the the requested page.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating forwards: The first <strong>n</strong> elements from the page.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating backwards: The last <strong>n</strong> elements from the page.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
quotes<br />
<a href="/docs/reference/objects#quoteconnection"><code>QuoteConnection</code></a>
</td>
<td>
<p>List of quotes created at this payment pointer</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor before the the requested page.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor after the the requested page.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating forwards: The first <strong>n</strong> elements from the page.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating backwards: The last <strong>n</strong> elements from the page.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
outgoingPayments<br />
<a href="/docs/reference/objects#outgoingpaymentconnection"><code>OutgoingPaymentConnection</code></a>
</td>
<td>
<p>List of outgoing payments sent from this payment pointer</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor before the the requested page.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor after the the requested page.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating forwards: The first <strong>n</strong> elements from the page.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating backwards: The last <strong>n</strong> elements from the page.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## PaymentPointerKey



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Internal id of key</p>
</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Id of the payment pointer to which this key belongs to</p>
</td>
</tr>
<tr>
<td>
jwk<br />
<a href="/docs/reference/objects#jwk"><code>Jwk!</code></a>
</td>
<td>
<p>Public key</p>
</td>
</tr>
<tr>
<td>
revoked<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicator whether the key has been revoked</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## PaymentPointerWithdrawal



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Withdrawal Id</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount to withdraw</p>
</td>
</tr>
<tr>
<td>
paymentPointer<br />
<a href="/docs/reference/objects#paymentpointer"><code>PaymentPointer!</code></a>
</td>
<td>
<p>Payment pointer details</p>
</td>
</tr>
</tbody>
</table>

## PaymentPointerWithdrawalMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/enums#liquidityerror"><code>LiquidityError</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
withdrawal<br />
<a href="/docs/reference/objects#paymentpointerwithdrawal"><code>PaymentPointerWithdrawal</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Peer



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
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
<p>Maximum packet amount that the peer accepts</p>
</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/objects#http"><code>Http!</code></a>
</td>
<td>
<p>Peering connection details</p>
</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
</td>
<td>
<p>Asset of peering relationship</p>
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
<p>Peer&#39;s public name</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
</tbody>
</table>

## PeerEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#peer"><code>Peer!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PeersConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#peeredge"><code>[PeerEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Quote



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Quote id</p>
</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Id of the payment pointer under which this quote was created</p>
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
sendAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>Amount to send (fixed send)</p>
</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>Amount to receive (fixed receive)</p>
</td>
</tr>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Maximum value per packet allowed on the possible routes</p>
</td>
</tr>
<tr>
<td>
minExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>
<p>Aggregate exchange rate the payment is guaranteed to meet</p>
</td>
</tr>
<tr>
<td>
lowEstimatedExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>
<p>Lower bound of probed exchange rate</p>
</td>
</tr>
<tr>
<td>
highEstimatedExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>
<p>Upper bound of probed exchange rate</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of expiration</p>
</td>
</tr>
</tbody>
</table>

## QuoteConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#quoteedge"><code>[QuoteEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## QuoteEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#quote"><code>Quote!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## QuoteResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
quote<br />
<a href="/docs/reference/objects#quote"><code>Quote</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Receiver



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Incoming payment URL</p>
</td>
</tr>
<tr>
<td>
paymentPointerUrl<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment pointer URL under which the incoming payment was created</p>
</td>
</tr>
<tr>
<td>
completed<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Describes whether the incoming payment has completed receiving funds.</p>
</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount</code></a>
</td>
<td>
<p>The maximum amount that should be paid into the payment pointer under this incoming payment.</p>
</td>
</tr>
<tr>
<td>
receivedAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>
<p>The total amount that has been paid into the payment pointer under this incoming payment.</p>
</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Date-time of expiry. After this time, the incoming payment will accept further payments made to it.</p>
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
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>A reference that can be used by external systems to reconcile this payment with their systems. E.g. an invoice number.</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of creation</p>
</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Date-time of last update</p>
</td>
</tr>
</tbody>
</table>

## RevokePaymentPointerKeyMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerKey<br />
<a href="/docs/reference/objects#paymentpointerkey"><code>PaymentPointerKey</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## TransferMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## TriggerPaymentPointerEventsMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
count<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Number of events triggered</p>
</td>
</tr>
</tbody>
</table>

## UpdatePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
peer<br />
<a href="/docs/reference/objects#peer"><code>Peer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

